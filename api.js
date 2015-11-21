'use strict';

const chalk = require('chalk');
const got = require('got');

const API_URL = 'http://powietrze.malopolska.pl/data/data.php';

const DEFAULT_OPTIONS = {
	type: 'lastmeasurement'
	//city: 'krakow',
	//location: 'krasinskiego',
	//date: new Date().toJSON().substr(0, 10), //like 2015-11-20
	//average: '24h'
};

module.exports = {
	fetch: function () {
		return new Promise(function (resolve) {
			got(API_URL, {
				json: true,
				query: DEFAULT_OPTIONS
			}, function(err, body) {
				if (err) {
					console.log(chalk.red('API error'));
				} else {
					resolve(body);
				}
			})
		});
	}
};
