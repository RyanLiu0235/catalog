# Catalog [![npm](https://img.shields.io/npm/dt/npm-scripts-catalog.svg)](https://www.npmjs.com/package/npm-scripts-catalog) [![npm](https://img.shields.io/npm/v/npm-scripts-catalog.svg)](https://www.npmjs.com/package/npm-scripts-catalog)

`npm-scripts-catalog` is CLI tool for you to start npm scripts faster. A little bit more convenient than `yarn run` and `npm run`

## Description

`npm-scripts-catalog` will list the available scripts of your current projects according to the package.json file. And what's more convenient is that you can now run the scripts automatically instead of typing the scripts.

After updating to version 2.x, I suggest you run `catalog` every time you try to start your apps, it's more efficient.

## Update

In version 2.0, thanks to [Inquirer.js](https://github.com/SBoudrias/Inquirer.js), `npm-scripts-catalog` is able to provide interactive command line user interfaces, making it even easier to run npm scripts.

Just enjoy and have some fun!

## Install

``` sh
$ npm install -g npm-scripts-catalog
```

## Usage

``` sh
$ cd someRepo
$ catalog
# alias `ctl` is more recommended, which is also globally registerred, because it's shorter
$ ctl
```

and if there is no scripts available, it will print 

``` sh
no script was ever defined!
```

## Options

``` sh
catalog git:(master) ctl -h

  Usage: ctl [options]


  Options:

    -V, --version  output the version number
    -d, --detail   list detail commands
    -h, --help     output usage information
```

* **-d**, this params helps to show the detail infomations of each command

## Preview

![catalog](./catalog.gif)