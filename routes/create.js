var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    res.send('this is a post request at /create');
});

module.exports = router;
