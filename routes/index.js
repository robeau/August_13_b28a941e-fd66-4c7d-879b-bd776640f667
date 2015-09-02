var express = require('express');
var uuid = require('node-uuid');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    uuid: uuid
  });
});

module.exports = router;
