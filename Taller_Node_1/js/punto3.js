
var http = require("http"), fs = require("fs")


http.createServer(function(req,res){
    fs.readFile('../index_punto_2.html',function(err,html){
            res.write(html);
            res.end();
        })

        function impresion(){
            
            console.log(req.url);
            
        }
        var tiempo = setInterval(impresion,2000)

}).listen(8080)