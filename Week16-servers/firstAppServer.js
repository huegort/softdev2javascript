var http = require('http');
var fs = require('fs');
var url = require('url');
var options ={
    docroot:"public",
    defaultPage:"index.html"
};
function displayAllCars(req, res) {
    res.write("display all cars");
    res.end();
}
http.createServer( function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    if (pathname=="/") pathname+=options.defaultPage;

    console.log("gettting file: "+options.docroot+ pathname);

    if (pathname == "/cars"){
        displayAllCars(request,response);
    }else{
        fs.readFile(options.docroot+pathname, function (err, data) {
            if (err) {
                console.log(err);
                // HTTP Status: 404 : NOT FOUND
                response.writeHead(404, {'Content-Type': 'text/html'});
                response.end();
            } else {
                //Page found
                // HTTP Status: 200 : OK
                response.writeHead(200, {'Content-Type': 'text/html'});
                // Write the content of the file to response body
                response.write(data.toString());
                response.end();
            }
        });
    }



}).listen(3002);
// Console will print the message
console.log('Server running at http://127.0.0.1:3002/');