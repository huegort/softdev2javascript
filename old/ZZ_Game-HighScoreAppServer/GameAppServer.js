var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var carRouter = require('./routes/HighScore.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use("/highscore", carRouter);


var server = app.listen(3003, function () {
    var port = server.address().port

    console.log("Example app listening at :%s",  port)
})