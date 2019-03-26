var daoHelper = require('./DAOHelper');


var studentDAO = {
    getAll: function(callback){
        var sql = "select * from student";
        daoHelper.callSql(sql,[],"getall", callback);
    },
    insert: function(student, callback){
        var sql = "insert into student values (?,?,?);";
        daoHelper.callSql(sql,[student.id, student.firstname, student.age],"getall", callback);

    }
};

module.exports= studentDAO;

