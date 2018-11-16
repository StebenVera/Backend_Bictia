var http = require("http");
var fs = require('fs');
var path = require('path');
var reloj = require("./reloj.js");
var hora = reloj.reloj;

urls =[
    {
        ruta: '',
        salida:'./index.html'
    },
    {
        ruta: 'experiencia',
        salida:'./experiencia.html'
    },
    {
        ruta:'referencias',
        salida:'./referencias.html'
    }
]


http.createServer(function (req,res) {
    var pathUrl = path.basename(req.url)

    urls.forEach(function(posicion) {
        if(posicion.ruta == pathUrl){
            fs.readFile(posicion.salida,function (err,data) {
                console.log(hora);
               //res.write(hora);
               res.writeHead(200,{'Content-Type':'text/html'})
               res.end(data)

            })
        }
})

    
}).listen(8080)