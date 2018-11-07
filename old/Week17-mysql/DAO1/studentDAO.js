var daoHelper=require("./DAOHelper");

var studentDAO= {
    create: function(student, callback){
        var sql ="insert into student (id, firstname, age)" +
            "values (?,?,?);";
        daoHelper.callSQL(sql,[student.id, student.firstname, student.age],"insert", callback);
    },
    getAll:function(callback){
        var sql = "select * from student;";
        daoHelper.callSQL(sql,[],"getAll",callback);
    }
}
module.exports = studentDAO;