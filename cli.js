#!/usr/bin/env node
'use strict';
var meow = require('meow');
var smog = require('./');

var cli = meow([
	'Usage',
	'  $ smok',
	'',
	//'Options',
	//'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ smok',
	//'  unicorns & rainbows',
	//'  $ smog ponies',
	//'  ponies & rainbows'
]);

console.log(smog(cli.input[0] || 'unicorns'));
