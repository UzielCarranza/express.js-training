var express = require('express');
var router = express.Router();

var data = require('../data/MOCK_DATA.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json(data)
});

module.exports = router;
