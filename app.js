var routing = require('./routing');
var express = require('express');

var app = express();

routing.init(app);

app.listen(8080);