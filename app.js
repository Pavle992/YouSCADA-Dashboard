
// /**
//  * Module dependencies.
//  */

var express = require('express');
var app = express();


app.use(express.static('public'));

//Routes
app.use(require('./routes'));



app.listen(3000);
console.log("Starting Socket App - http://localhost:3000");