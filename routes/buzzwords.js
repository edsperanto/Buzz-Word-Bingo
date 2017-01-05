const express = require('express');
const buzzWords = require('./../public/buzzWords.js');
let router = express.Router();

router.get('/', function(req, res, next) {
	res.type('json');
	res.status(200);
	res.send(`{ "buzzWords": ${JSON.stringify(buzzWords)} }`);
	res.end();
});

module.exports = router;