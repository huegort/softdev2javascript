var http = require('http');

var server = http.createServer(function(request, response){
    console.log("dealing with request");
    console.log(request.url);
    console.log(request.method);

    if(request.url == "/student"){
        response.write("get all students");
        response.end();

    }else{
        response.write("hello manny");
        response.end();

    }

});

server.listen(4000);

console.log("serverlistinening on port 4000");