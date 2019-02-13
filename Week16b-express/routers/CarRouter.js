var express = require("express");
var router = express.Router();

var cars={
    "99mo123":{reg:"99mo123",make:"ford",model:"modeo"},
    "171mo123":{reg:"171mo123",make:"ford",model:"modeo"},
    "182mo123":{reg:"182mo123",make:"ford",model:"modeo"}
}


router.get('/', function(req,res){
    console.log("in get23");
    res.set("Access-Control-Allow-Origin", "http://localhost:63342");
    var returnArray = [];
    for(key in cars) {
        var value = cars[key];
        returnArray.push(value);

    }

    res.send(returnArray);
});

router.get('/:id', function(req,res){
    res.set("Access-Control-Allow-Origin", "http://localhost:63342");

    res.send(cars[req.param("id")]);
});

router.post('/create', function(req,res){
    res.set("Access-Control-Allow-Origin", "http://localhost:63342");

    var car = req.body;
    cars[car.reg]=car;
    res.send("<html><body>car reg is " +car.reg+"</body></html>");
});
router.post('/update', function(req,res){
    res.set("Access-Control-Allow-Origin", "http://localhost:63342");

    var car = req.body;
    cars[car.reg]=car;
    res.send({success:true});
});
router.get('/hi', function(req,res){
    console.log("in hi");
    res.send("hi");
})
router.delete('/:id', function(req,res){
    res.set("Access-Control-Allow-Origin", "http://localhost:63342");

    console.log("in delete");


     var id = req.param("id");

    delete cars[id];
    res.send({success:true});
})


module.exports=router;