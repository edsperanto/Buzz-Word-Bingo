const express = require('express');
const buzzWords = require('./../public/buzzWords.js');
let router = express.Router();

router.get('/', function(req, res, next) {
	console.log(buzzWords);
	res.end();
});

module.exports = router;