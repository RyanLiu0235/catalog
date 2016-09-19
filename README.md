# catalog

list your npm scripts according to your package.json

## usage

``` sh
$ npm install -g npm-scripts-catalog
```

## description

`npm-scripts-catalog` will list the available scripts of your current projects according to the package.json file.

## demo

``` sh
$ cd someRepo
$ catalog

scripts available:
    test: node test.js
    start: node app.js

```

and if there is no scripts available, it will console

``` sh

no script is available

```
