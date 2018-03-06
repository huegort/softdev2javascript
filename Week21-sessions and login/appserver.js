var express = require('express');
var session = require('express-session');
var testSessionRouter = require('./routes/testSession');

var app = express();

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.all('/*', function(req,res, next){
    console.log("checking welcome "+req.session.username);
    if (req.session && req.session.username){
        next();
    }else{
        res.redirect('/login.html');
    }
})

app.use("/testSession",testSessionRouter);


var server = app.listen(3003, function () {
    var port = server.address().port

    console.log("Example app listening at :%s",  port)
})
