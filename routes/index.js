var express = require('express');
var router = express.Router();
var importdata=require('../db.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(importdata);
});

module.exports = router;
