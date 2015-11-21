# smog [![Build Status](https://travis-ci.org/elmccd/smog.svg?branch=master)](https://travis-ci.org/elmccd/smog)

> My impeccable module


## Install

```
$ npm install --save smog
```


## Usage

```js
const smog = require('smog');

smog('unicorns');
//=> 'unicorns & rainbows'
```


## API

### smog(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global smog
```

```
$ smog --help

  Usage
    smog [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ smog
    unicorns & rainbows
    $ smog ponies
    ponies & rainbows
```


## License

MIT © [Maciej Dudzinski](http://github.com/elmccd)
