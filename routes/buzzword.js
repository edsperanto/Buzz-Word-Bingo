const qs = require('querystring');
const express = require('express');
const my = require('./../public/my.js');
let router = express.Router();

router.post('/', function(req, res, next) {
	res.type('json');
	res.status(200);
	if(typeof req.body.buzzWord === 'string' && typeof req.body.score === 'number') {
		req.body['heard'] = false;
		my.buzzWords.push(req.body);
		res.send(`{ "success": true }`);
		res.end();
	}else{
		res.send(`{ "success": false }`);
		res.end();
	}
});

router.put('/', function(req, res, next) {
	res.type('json');
	res.status(200);
	function checkConditions() {
		let validFormat = typeof req.body.buzzWord === 'string' && typeof req.body.heard === 'boolean';
		let settingToTrue = req.body.heard === true;
		let foundBuzzWord = false;
		for(let i = 0; i < my.buzzWords.length; i++) {
			if(my.buzzWords[i].buzzWord === req.body.buzzWord && settingToTrue && my.buzzWords[i].heard === false) {
				my.buzzWords[i].heard = req.body.heard;
				my.score += my.buzzWords[i].score;
				foundBuzzWord = true;
			}
		}
		return validFormat && settingToTrue && foundBuzzWord;
	}
	if(checkConditions()) {
		res.send(`{ "success": true, "newScore": ${my.score} }`);
		res.end();
	}else{
		res.send(`{ "success": false, "newScore": ${my.score} }`);
		res.end();
	}
});

router.delete('/', function(req, res, next) {
	res.type('json');
	res.status(200);
	if(typeof req.body.buzzWord === 'string') {
		let foundBuzzWord = false;
		for(let i = 0; i < my.buzzWords.length; i++) {
			if(my.buzzWords[i].buzzWord === req.body.buzzWord) {
				my.buzzWords.splice(i, 1);
				foundBuzzWord = true;
			}
		}
		if(foundBuzzWord) {
			res.send(`{ "success": true }`);
			res.end();
		}else{
			res.send(`{ "success": false }`);
			res.end();
		}
	}
});

module.exports = router;