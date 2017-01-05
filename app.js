const fs = require('fs');
const express = require('express');
const buzzwords = require('./routes/buzzwords');
const buzzword = require('./routes/buzzword');
const reset = require('./routes/reset');
let app = express();
let buzzWords = [];

app.use('/buzzwords', buzzwords);
app.use('/buzzword', buzzword);
app.use('/reset', reset);

app.get('/', function(req, res, next) {
	res.type('html');
	res.status(200);
	fs.readFile('./index.html', function(err, content) {
		res.send(content);
		res.end();
	});
});

app.listen(3000, function() {
	let host = this.address().address;
	let port = this.address().port;
	console.log(`Server is listening on http://${host}:${port}`);
});