var http = require('http');
var path = require('path');
var url = require('url');
    urls = [

        {
            id: 1,
            ruta: '',
            salida: '<h2>home</h2>'
        },
        {
            id:2,
            ruta: 'acerca',
            salida: '<h2>Acerca</h2>'
        },
        {
            id:3,
            ruta: 'contacto',
            salida: '<h2>Contaco</h2>'
        }
    ]

    http.createServer(function (req,res) {
        var mensaje = 'Bienvenido';
        var pathUrl = path.basename(req.url);
        var id = url.parse(req.url,true).query.id

        console.log(`path: ${pathUrl} //id: ${id}`)
        urls.forEach(function(posicion) {
            if(posicion.ruta == pathUrl || posicion.id==id)
            {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(mensaje+posicion.salida)
            }
        });

        if(!res.finished)
        {
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end('<h1>Eror 404:Not Found</h1>');
        }

    }).listen(8080);