var mysql = require('mysql');

var con = mysql.createConnection(
    {
        user:'root',
        password:'',
        database:'softdev2',
        host:'localhost'
    }
);

con.connect(function(err){
    if(err)throw err;
    var sql = 'insert into student (id, firstname, age) values (?,?,?);';
    con.query(sql,[1,'mary',21],function(err, result){
        if (err)throw err;
        console.log(JSON.stringify(result));
    });
    var sql2 = 'insert into albumns (title, artist) values (?,?);';
    var albumn ={title:"war", artist:"u2"};
    con.query(sql2,[albumn.title, albumn.artist], function(err,result){
        if (err) throw err;
        console.log(result.insertId);
        albumn.id= result.insertId;
        console.log(JSON.stringify(albumn));
    })
});