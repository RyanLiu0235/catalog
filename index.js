var fs = require('fs');
var chalk = require('chalk');
var log = console.log;

fs.readFile('./package.json', function(err, data) {
	if (err) {
		throw err;
	}
	var _settings = JSON.parse(data.toString()).scripts;
	log(chalk.yellow('scripts available:'));
	for (var i in _settings) {
		log('    ' + chalk.blue(i + ': ') + chalk.green(_settings[i]));
	}
	log('\n');
});