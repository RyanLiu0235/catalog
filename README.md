# Catalog

[![npm](https://img.shields.io/npm/dt/npm-scripts-catalog.svg)](https://www.npmjs.com/package/npm-scripts-catalog)
[![npm](https://img.shields.io/npm/v/npm-scripts-catalog.svg)](https://www.npmjs.com/package/npm-scripts-catalog)

list your npm scripts according to your package.json

## Update

In version 2.0, thanks to [Inquirer.js](https://github.com/SBoudrias/Inquirer.js), `npm-scripts-catalog` is able to provide interactive command line user interfaces, making it even easier to execute your command.

Just enjoy and have some fun!

## Install

``` sh
$ npm install -g npm-scripts-catalog
```

## Description

`npm-scripts-catalog` will list the available scripts of your current projects according to the package.json file.

## Usage

``` sh
$ cd someRepo
$ catalog
```

and if there is no scripts available, it will print 

``` sh
no script was ever defined!
```