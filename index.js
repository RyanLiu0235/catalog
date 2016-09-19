var fs = require('fs');

fs.readFile('./package.json', function(err, data) {
	if (err) {
		throw err;
	}
	var _settings = JSON.parse(data.toString()).scripts;
	for (var i in _settings) {
		console.log(i + ': ' + _settings[i]);
		console.log('\n');
	}
});