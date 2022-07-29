var express = require('express');
var router = express.Router();

/* GET users listing. */
router.put('/', function(req, res, next) {
    res.send('This is a PUT request at /edit');
});

module.exports = router;
