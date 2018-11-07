var express = require('express');
var router = express.Router();

var counter = 0;
var highscores=[
    {name:'AAA',score:500,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:450,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:400,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:350,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:300,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:250,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:200,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:150,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:100,email:'aaaaaaaaa@bbbbbbb.com'},
    {name:'AAA',score:1,email:'aaaaaaaaa@bbbbbbb.com'},
];
/* GET car listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(highscores));
    console.log("in hs home");
});
router.post('/submit', function(req, res, next) {
    console.log(req.body);
    var hs ={};
    hs.name = req.body.name;
    hs.score= parseInt(req.body.score);
    hs.email = req.body.email;
    // put into a database
    highscores.push(hs);
    highscores.sort(function(a, b) {
        return parseFloat(b.score) - parseFloat(a.score);
    });

    highscores.pop(); // take off the end
    console.log(highscores);
    res.setHeader('Content-Type', 'application/json');
    res.send({created:true});
});

module.exports = router;