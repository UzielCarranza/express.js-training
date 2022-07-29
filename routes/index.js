var express = require('express');
var router = express.Router();
var data = require('../data/MOCK_DATA.json');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function(request, response, next) {
//   response.render('index', {title: "response from /"});
// });

//GET with routing parameters


router.get('/class/:id', function(request, response, next) {
  // response.render('index', {title: "response from /"});
  const studentId = Number(request.params.id);
  const students = data.filter((student) => student.id === studentId);
  response.send(students)
});


module.exports = router;
