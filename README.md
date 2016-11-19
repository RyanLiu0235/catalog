# Catalog

[![npm](https://img.shields.io/npm/dt/npm-scripts-catalog.svg)](https://www.npmjs.com/package/npm-scripts-catalog)
[![npm](https://img.shields.io/npm/v/npm-scripts-catalog.svg)](https://www.npmjs.com/package/npm-scripts-catalog)

list your npm scripts according to your package.json

## Usage

``` sh
$ npm install -g npm-scripts-catalog
```

## Description

`npm-scripts-catalog` will list the available scripts of your current projects according to the package.json file.

## Demo

``` sh
$ cd someRepo
$ catalog

scripts available:
    test: node test.js
    start: node app.js

```

and if there is no scripts available, it will print 

``` sh
no script is available
```
