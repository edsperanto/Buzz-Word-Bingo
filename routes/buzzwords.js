const express = require('express');
const my = require('./../public/my.js');
let router = express.Router();

router.get('/', function(req, res, next) {
	res.type('json');
	res.status(200);
	res.send(`{ "buzzWords": ${JSON.stringify(my.buzzWords)} }`);
	res.end();
});

module.exports = router;