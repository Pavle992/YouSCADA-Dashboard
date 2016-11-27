
// /**
//  * Module dependencies.
//  */

var express = require('express');
var app = express();


app.use(express.static('./views'));

//Routes
app.use(require('./routes'));


//Scripts

app.use('/scripts/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/scripts/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/scripts/highcharts', express.static(__dirname + '/node_modules/highcharts-release/'));

app.listen(3000);

console.log("Starting Socket App - http://localhost:3000");