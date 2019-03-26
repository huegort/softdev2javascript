var studentDAO = require("./studentDAO");

var student = {id:33,firstname:'joe',age:21};
studentDAO.create(student, function(result){

});

studentDAO.getAll(function(result){
    //res.send(result);
    console.log(JSON.stringify(result));
});