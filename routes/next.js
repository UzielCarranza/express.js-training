var express = require('express');
var router = express.Router();

//GET with next()
const data = require("../data/MOCK_DATA.json");


router.get('/', function (req, res, next) {

    console.log("the response will be sent by the next function")
}, (req, res) => {
    res.send("I just set up a route with a second callback")
});


module.exports = router;