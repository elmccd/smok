'use strict';
module.exports = function (str, opts) {
	'use strict';

	var _ = require('lodash');
	var chalk = require('chalk');
	var api = require('./api.js');

	api
		.fetch()
		.then(function (data) {

			const SHORT_NAMES = {
				'no2': 'NO₂',
				'co': 'CO',
				'so2': 'SO₂',
				'o3': 'O₃'
			};

			var Table = require('cli-table');

			var fields = _.unique(_.pluck(data, 'parameter'));

			var table = new Table({
				head: [''].concat(_.map(fields, field => chalk.blue(SHORT_NAMES[field] || _.capitalize(_.find(data, {parameter: field})['parameterdesc'])))),
				colWidths: [14].concat(_.map(fields, el => 12))
			});

			var newData = _.chain(data)
				.groupBy('city')
				.map((locationRecords, location) => {
					return {
						[chalk.blue(_.capitalize(location))]: _.map(fields, field => {
							var el = _.findWhere(locationRecords, {parameter: field});
							if (!el) {
								return '';
							}

							return el['value'] + ' ' + (el['unit'] || '') + (+el['percentoflimit'] > 100  ? chalk.red('H') : '');

						})

					}
				})
				.value();

			table.push.apply(table, newData);

			console.log(table.toString());

		})
		.catch(function (err) {
			console.log(err);
		})
	;

};
