Concepts
========

Projects
--------
SMSGFX works with objects called "**Projects**", a project is a container for the colour palettes, graphics 
tiles and tile maps that you've defined.

Palette
-------
A palette is a selection of colours that can be used in your graphics. Retro game consoles all have different 
limitation when it comes to colour palettes.

The Sega Master System and Game Gear use palettes with 16 colour slots per palette and you may use two palettes
per tile map, giving you an effective 32 colours. The Nintendo Entertainment System gives you 4 distinct colour 
palettes, 3 colours each, for 12 in total. The Nintendo Game Boy on the other hand only ever has access to 4 shades 
of grey. 

When we design graphics for retro games consoles, we need to remember that there are limitations on the colours 
that you can use and therefore design our images to look good with a minimum number of colours. 

Colours
-------
We fill our palettes with colours, and depending on the console you may have less or more available to you. 

For example; the Sega Master System gives you a total of 64 colours to use from, whereas the Game Gear gives 
you a total of 4096. The Nintendo Game Boy allows you only 4 shades of grey, whereas the Nintendo Entertainment 
System gives you 56 colours to work with.

Tiles
-----
Most retro games consoles construct their graphics using a mosaic of 8x8 pixel tiles.

To construct a scene we lay out these tiles out in a 'tile map'. You can not draw on individual pixels on these 
systems, your scene is constructed from these tiles.

In almost all games a single tile is repeated multiple times.

Tile map
--------
This is a grid constructed of individual 8x8 graphics tiles that you define. Each tile may be repeated any number 
of times. Each entry in a tile map also tells the system which colour palette to use and whether the tile is to be 
flipped horizontally or vertically, or appear on-top of or behind sprites.

You cannot place a tile anywhere on the screen, each tile must be placed into a tile map.

Sprite
------
A sprite is a single 8x8 tile from your tile set, unlike a tile map, a sprite may be moved to any position onto 
the screen.

In a game, usually the player's character is a sprite, depending on the size of the player's character, several 
tiles and sprites may be used to act as one large sprite.

There are limitations on sprites, that vary per system. If you exceed the limitations you may experience flickering 
graphics in your game.

Tile set
--------
A tile set is a concept used by SMSGFX which refers to the entire collection of tiles for your project regardless 
of the tile map that they're used on.