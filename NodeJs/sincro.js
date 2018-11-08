var http = require("http")
var fs = require("fs") //FyleSystem


var contenido = fs.readFileSync('./index.html')


http.createServer(function(req,res)
{
    res.write(contenido);
    res.end();
}).listen(8080)