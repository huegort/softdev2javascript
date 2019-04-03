var express = require("express");
var bodyParser = require('body-parser');
var userRouter = require('./routes/userRouter');
var loginRouter = require('./routes/loginRouter');
var app = express();
var session = require('express-session');

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));
var unsecuredURLs=["/login.html", "/login/login","/login/logout"];

app.use("/",function(req,res,next){
    //console.log("checking "+req.url);
    var isGood = false;
    var url = req.url;

    if (req.session.username !== undefined){
            isGood = true;
    }
    if (!isGood){
        for (i in unsecuredURLs){
            //console.log("testing "+unsecuredURLs[i]+"=="+url);
            if (url == unsecuredURLs[i]){
                isGood=true;
            }
        }
    }

    if (isGood) {
        next();
    }else{
        if (url.endsWith("html")){
            res.redirect("/login.html");
        }else{
            res.status(401);
            res.send({error:"not logged in"});
        }
    }
})

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use(express.static('public'));

var server = app.listen(3003, function(){
    console.log("up and at 'em");
});
