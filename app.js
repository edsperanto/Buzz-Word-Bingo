const express = require('express');
const buzzwords = require('./routes/buzzwords');
const buzzword = require('./routes/buzzword');
const reset = require('./routes/reset');
let app = express();



app.listen(3000, function() {
	let host = this.address().address;
	let port = this.address().port;

	console.log(`Server is listening on http://${host}:${port}`);
});