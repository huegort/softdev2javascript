var express = require("express");
var router = express.Router();

var users = [
    {username:'joe2'},
    {username:'mary2'},
    {username:'john2'},
];
// getAll
router.get('/',function(req,res){

    res.send(users);
});
// findById :- not done

//create
router.post('/create',function(req,res){
    var user = req.body;
    console.log("create"+JSON.stringify(user));
    users.push(user);

    res.send("{success:true}");
})

//update
router.put('/update',function(req,res){
    var user = req.body;
    console.log("update:"+JSON.stringify(user));

    res.send("{success:true}");
})
//delete
router.delete('/:id',function(req,res){
    var username = req.param('id');
    console.log("delete:"+username);

    res.send("{success:true}");
})

module.exports=router;