var express = require('express');
var router = express.Router();


// xivdb crawler
var xivdb = require('../xivdb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'XIVDB Crawler' });
});

module.exports = router;
