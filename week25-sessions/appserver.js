var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var loginRouter = require('./routes/loginRouter');
var adminRouter = require('./routes/adminRouter')
var app = express();

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));



app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'));

app.use("/admin", function(req,res, next){
    if (req.session.user === undefined){
        res.send("not loged in "+req.session.user);
        //res.redirect("/login.html");
    }else{
        next();
    }
})


app.use("/login", loginRouter);
app.use("/admin", adminRouter);


var server = app.listen(3004, function(){
    console.log("localhost:3004");
});
