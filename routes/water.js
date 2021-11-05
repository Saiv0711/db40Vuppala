var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('water', { title: "Search Results Water" });
});

module.exports = router;
