var daoHelper = require('./DAOHelper');

var sql = "select * from student;";

daoHelper.callSql(sql,[],"blah", function(result){
    console.log(JSON.stringify(result));
});

var sql = "insert into student (id, firstname, age) values (?,?,?);";

daoHelper.callSql(sql,[4,'asdgfsd',33], "insert");