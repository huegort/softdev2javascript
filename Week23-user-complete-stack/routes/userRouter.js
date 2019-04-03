var express = require("express");
var router = express.Router();
var userDAO = require("../dao/UserDAO")

// getAll
router.get('/',function(req,res){
        userDAO.getAll(function(result){
            res.send(result);
        })
    
});
// findById :- not done

//create
router.post('/create',function(req,res){
    var user = req.body;
    console.log("create"+JSON.stringify(user));
    userDAO.create(user, function(result){
        res.send("{success:true}");
    })

})

//update
router.put('/update',function(req,res){
    var user = req.body;
    console.log("update:"+JSON.stringify(user));

    userDAO.update(user, function(result){
        res.send("{success:true}");
    })
})
//delete
router.delete('/:id',function(req,res){
    var username = req.param('id');
    console.log("delete:"+username);

    userDAO.delete(username, function(result){
        res.send("{success:true}");
    })
})

module.exports=router;