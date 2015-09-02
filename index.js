var express = require("express"),
    fs = require('fs'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    port = process.env.PORT || 2595;
 
var app = express();
app.use(logger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view options", {
    layout: false
});
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
 
app.get('/', function (req, res) {
    res.render('public/index.html');
});
 
app.listen(port);
console.log('Express server running at http://localhost:' + port);