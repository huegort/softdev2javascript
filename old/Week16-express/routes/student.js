var express = require('express');
var router = express.Router();
var studentDAO = require("../DAO/studentDAO");

router.get("/", function(req,res){
    studentDAO.getAll(function(result){
        res.send(result);
    })

});

module.exports = router;