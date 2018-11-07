var daoHelper = require('./DAOHelper');

var albumDAO = {
    tableName : "albumns",
    getAll:function(callback){
        var sql ="select * from "+this.tableName+";";
        daoHelper.callSql(sql,[],"getAll", callback);
    },
    findById: function(id, callback){
        var sql ="select * from "+this.tableName+" where id = ?;";
        daoHelper.callSql(sql,[id],"find By Id", callback);

    },
    insert: function(album, callback){
        var sql ="insert into "+this.tableName+" set ?;";
        daoHelper.callSql(sql,[album],"insert", callback);

    },
    update: function(album, callback){
        var sql ="update "+this.tableName+" set ? where id = ?;";
        daoHelper.callSql(sql,[album, album.id],"getAll", callback);

    },
    delete: function(id, callback){
        var sql ="delete from "+this.tableName+" where id = ?;";
        daoHelper.callSql(sql,[id],"delete", callback);
    }
    // other functions here
}

module.exports = albumDAO;