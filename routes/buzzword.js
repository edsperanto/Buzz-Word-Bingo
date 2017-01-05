const qs = require('querystring');
const express = require('express');
const buzzWords = require('./../public/buzzWords.js');
let router = express.Router();

router.post('/', function(req, res, next) {
	res.type('json');
	res.status(200);
	if(typeof req.body.buzzWord === 'string' && typeof req.body.score === 'number') {
		req.body['heard'] = false;
		buzzWords.push(req.body);
		res.send(`{ "success": true }`);
		res.end();
	}else{
		res.send(`{ "success": false }`);
		res.end();
	}
});

module.exports = router;