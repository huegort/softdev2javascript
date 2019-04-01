var daoHelper = require('./DAOHelper');

var userDAO ={
    getAll:function (callback){
        var sql="select username from user;"
        daoHelper.callSql(sql,[],"getAll",callback);
    },
    create:function(user,callback){
        var sql="insert into user (username, password) values (?, MD5(?));";
        var data =[user.username, user.password]
        daoHelper.callSql(sql, data,"insert",callback);

    },
    update:function(user,callback){
        var sql="update user set password=MD5(?) where username= ?;";
        var data =[user.password,user.username];
        daoHelper.callSql(sql, data,"update",callback);

    },
    delete:function(username,callback){
        var sql="delete from user where username = ?;";
        var data =[username]
        daoHelper.callSql(sql, data,"delete",callback);

    },
    validateUser:function(user,callBack){

    }

}

module.exports=userDAO;