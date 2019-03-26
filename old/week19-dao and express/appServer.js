var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var albumRouter = require('./routes/album.js');

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use("/album", albumRouter);


var server = app.listen(3003, function () {
    var port = server.address().port;

    console.log("Example app listening at :%s",  port)
});