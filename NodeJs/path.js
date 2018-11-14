var http = require('http');
var path = require('path')

    urls = [

        {
            ruta: '',
            salida: '<h2>home</h2>'
        },
        {
            ruta: 'acerca',
            salida: '<h2>Acerca</h2>'
        },
        {
            ruta: 'contacto',
            salida: '<h2>Contaco</h2>'
        }
    ]

    http.createServer(function (req,res) {
        var mensaje = 'Bienvenido';
        var pathUrl = path.basename(req.url);


        urls.forEach(function(posicion) {
            if(posicion.ruta == pathUrl)
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