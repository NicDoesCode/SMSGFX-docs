import path from "path";
import fs from "fs";
import url from 'url';
import express from 'express';
import https from 'https';
import chokidar from 'chokidar';
import { exec } from 'child_process';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const docsDir = path.resolve('./docs');
const sourceDir = path.resolve('./docs/source');
const servDir = path.resolve('./docs/build/html');
const portHttp = 8080;
const portHttps = 8443;

let buildQueued = false;
let isBuilding = false;

function watchSourceDirectoryForChanges() {
    const watcher = chokidar.watch(sourceDir);
    watcher.on('ready', () => {
        console.log(`> Watching directory '${sourceDir}' for changes.`);
        watcher.on('all', () => {
            console.log('> File change detected.');
            buildAsync();
        });
        buildAsync();
    });
}

async function buildAsync() {
    if (!isBuilding) {
        console.log('  - Build starting.');

        isBuilding = true;
        buildQueued = false;

        const { error, stdout, stderr } = await exec('make html', { cwd: docsDir });

        isBuilding = false;

        if (!error) {
            console.log('  - Build completed.');
        } else {
            console.error('  - Build had errors.');
            console.error(stdout);
            console.error(stderr);
        }
        if (buildQueued) {
            await buildAsync();
        }

    } else {
        console.log('  - Currently building, new build queued.');
        buildQueued = true;
    }
}


async function startServer() {

    await watchSourceDirectoryForChanges();

    app.use(express.static(servDir));

    console.log(`Path: ${servDir}`);

    app.listen(portHttp, () => {
        console.log(`Server running at: http://localhost:${portHttp}`);
    });

    if (fs.existsSync('./cert/server.key') && fs.existsSync('./cert/server.cert')) {
        https.createServer({
            key: fs.readFileSync('./cert/server.key'),
            cert: fs.readFileSync('./cert/server.cert')
        }, app).listen(8443, () => {
            console.log(`Server running at: https://localhost:${portHttps}`);
        });
    } else {
        console.warn(`Unable to create HTTPS server on port ${portHttps} because the files './cert/server.key' and './cert/server.cert' do not exist.`);
    }

}

startServer();