var mysql = require('mysql');

var daoHelper={
    callSql: function(sql,data, info, callback){
        var con = getConnection();
        con.connect( function(){
            con.query(sql, data,function(err,result){
                logAndErr(err,"returned "+info);
                if(callback) callback(result);
            })
        })
    }
};

function getConnection(){
    return mysql.createConnection({
        user:'root',
        password:'',
        database:'softdev2',
        host:'localhost'
    })
}
function logAndErr(err, info){
    if(err) throw err;
    console.log(info);
}

module.exports = daoHelper;