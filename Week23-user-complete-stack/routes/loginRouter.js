var express = require("express");
var router = express.Router();
var userDAO = require("../dao/UserDAO")

router.post("/login", function(req,res){
    var user = req.body;
    console.log("login"+JSON.stringify(user));
    userDAO.validateUser(user, function(result){
        if (result.length !=0){
            req.session.username = result[0].username;
            res.redirect("/user.html");
        }else{
            res.redirect("/login.html")
        }

    })


});
router.get("/logout",function(req,res){
    req.session.username = undefined;
    res.redirect("/login.html");
})


module.exports=router;