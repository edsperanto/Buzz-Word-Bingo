const express = require('express');
const my = require('./../public/my.js');
let router = express.Router();

router.post('/', function(req, res, next) {
	my.buzzWords = [];
	my.score = 0;
	res.type('json');
	res.status(200);
	res.send(`{ "success": true }`);
	res.end();
});

module.exports = router;