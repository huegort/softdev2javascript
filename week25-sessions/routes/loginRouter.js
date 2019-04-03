var express = require("express");
var router = express.Router();

router.get('/login',function(req,res){

    req.session.user = "joe";
    res.redirect("/welcome.html")

})

router.get("/checkLogin", function(req,res){
    if (req.session.user === undefined){
        res.send("not loged in");
        //res.redirect("/login.html");
    }else{
        res.send ("hello "+req.session.user);
        //
    }
})
router.get('/logout', function (req,res){
    req.session.user = undefined;
    res.redirect("/login.html");
})

router


module.exports=router;