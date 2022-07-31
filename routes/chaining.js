var express = require('express');
const data = require("../data/MOCK_DATA.json");
var router = express.Router();


router.route('/').get(function (req, res, next) {

    // res.send("retrieve class info")
    throw new Error();
}).post(function (req, res, next) {

    res.send("create class info")
}).put(function (req, res, next) {

    res.send("update class info")
});

module.exports = router;
