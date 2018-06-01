# Farfetch Translation Tool

Gulp build to pull translations from JSON file and output these as separate HTML files.

## Install

You will need to have Node and Gulp installed to run this build.
```sh
npm install
```

## Structure

Before running the build you must set up a new project, to do this create a new folder in the 'projects' directory.

The project will need to contain two files (please see the 'example' file for basic structure):

* translations.json - a JSON file containing an object for each language version, each object should contain the translations split up into a key for each piece of copy.
* index.html - The markup which will act as a template, the key used in the translations file should be included in the index file with the '@@' prefix, e.g. '@@translation1'.

The build will output a separate html file for each object in the translations.json file.

## Run Build
To run the build:

```sh
gulp --build 'insert-project-name-here'
```

(outputted files will appear in a dist directory within the project)
