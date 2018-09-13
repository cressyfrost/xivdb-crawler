var express = require('express');
var router = express.Router();


// xivdb crawler
var xivdb = require('../xivdb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'XIVDB Crawler' });
});

/* AJAX xivdb item GET */
router.get('/item/:itemId', function (req, res) {

xivdb.getItem(req.params.itemId, function(err, data){ 
        if(err) return res.send(err);       
        res.send(data);
    });

})




module.exports = router;
