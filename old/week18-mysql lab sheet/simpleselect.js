var mysql = require('mysql');

var con = mysql.createConnection({
    user:'root',
    password:'',
    database:'softdev2',
    host:'localhost'
});
var id = "34";

con.connect(function(err){
    if(err) throw err;
    var sql1 = 'select * from student;';
    con.query(sql1,function(err, result){
        if(err) throw err;
        console.log("result="+JSON.stringify(result));
    });

    var sql2 = 'select * from student where id = ?;';
    console.log(sql2);
    con.query(sql2,[id],function(err, result){
        if(err) throw err;
        console.log("result="+JSON.stringify(result));
        //con.close;
    });
    console.log("got connection!!!!");
});
console.log("all seams ok!!!");