var express = require("express");
var carRouter = require("./routers/CarRouter.js");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/', function(req, res){
    console.log("IN GET /");
    res.send("hello world<script>console.log('on client')</script>");
})
app.use('/car', carRouter);


app.use(express.static('public'));



var server = app.listen(3003, function(){
    console.log("up and at 'em lab 16   ");
})
