var daoHelper = require("./DAOHelper");

//var sql = "create table blah (id int(10));";
//var sql= "drop table blah;"
/*
daoHelper.callSQL(sql,[],"create blah", function(result){
    console.log("we got"+ JSON.stringify(result));
});
*/
var sql = "insert into blah (id) values (?);";
daoHelper.callSQL(sql,[12],"insert", function(result){
    sql = "select * from blah;";
    daoHelper.callSQL(sql,[],"getAll", function(result){
        console.log(JSON.stringify(result));
    })
});
