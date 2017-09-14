#!/usr/bin/env bash

test ! -e libs && mkdir libs
cp node_modules/jquery/dist/jquery.min.js libs/jquery.min.js
cp node_modules/showdown/dist/showdown.min.js libs/showdown.min.js
cp node_modules/simplemde/dist/simplemde.min.js libs/simplemde.min.js
cp node_modules/simplemde/dist/simplemde.min.css libs/simplemde.min.css
