const qs = require('querystring');
const express = require('express');
const buzzWords = require('./../public/buzzWords.js');
let router = express.Router();

router.post('/', function(req, res, next) {
	req.setEncoding('utf8');
	buzzWords.push(req.body);
	console.log(buzzWords);
	res.type('json');
	res.status(200);
	res.send(`{ "success": true }`);
	res.end();
});

module.exports = router;