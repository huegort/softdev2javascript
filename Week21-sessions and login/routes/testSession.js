var express = require('express');
var router = express.Router();

router.get("/count", function(req,res){
    var counter = req.session.count;
    console.log(counter);
    if (counter === undefined){
        console.log("reset");
        counter = -1;
    }
    counter++;
    req.session.count = counter;
    res.send("hi there "+ counter);
});
router.get("/authenticate", function(req,res){
    req.session.username= "joe";
    res.redirect("welcome");
})
router.get("/logout", function(req,res){
    if (req.session) {
        req.session.destroy(function (err) {
        })
    }
    res.redirect("welcome");
})
router.get("/welcome", function(req, res){
    if (req.session.username === undefined){
        res.redirect("/login.html");
    }else {
        res.redirect("/welcome.html");
    }
})
module.exports = router