# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'SMSGFX'
copyright = '2023, Qwerky Retro Gamers'
author = 'Nicholas Furgiuele'

release = '0.1'
version = '0.1.0'

# root_doc = 'source/index'

# -- General configuration
extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'sphinx_rtd_theme'
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'
html_theme_options = {
    
}

# -- Options for EPUB output
epub_show_urls = 'footnote'

remove_from_toctrees = ["docs/build/source/quick-overview.rst"]
