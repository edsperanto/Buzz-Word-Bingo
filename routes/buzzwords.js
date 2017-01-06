const express = require('express');
const my = require('./../public/my.js');
let router = express.Router();

router.get('/', (req, res, next) => res.json( { "buzzWords": my.buzzWords} ));

module.exports = router;