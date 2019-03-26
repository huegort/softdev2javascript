var express = require("express");
var bodyParser = require('body-parser');
var userRouter = require('./routes/userRouter');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use(express.static('public'));

var server = app.listen(3003, function(){
    console.log("up and at 'em");
});
