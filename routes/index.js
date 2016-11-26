

// exports.index = function(req, res){
//   res.render('index');
// };

var express = require('express');
var router = express.Router();
var path = require('path');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Calls WS
router.get('/', function(req, res) {
    res.sendFile('index.html', {"root": "./views"});
});

module.exports = router;