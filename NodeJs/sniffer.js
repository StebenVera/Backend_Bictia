var http = require('http');

var opciones = {
        host : 'http://www.electronics-future.co',
        port : 80,
        path : '/recargas'
};

var htmlCode = '';


function httpCliente(res) {
    //comillas invertida, templates string EM6
    console.log(`EL sitio ${opciones.host} responde. Estado: ·${res.statusCode}`);

    res.on('data',function (data) {
        htmlCode += data;
        console.log(data,data.toString());
    })
}

function httpError(err) {
    console.log(`EL sitio ${opciones.host} NO responde. Estado ${err.code}`);
}

function servidor(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(htmlCode);
}



http.get(opciones,httpCliente).on('error',httpError);

http.createServer(servidor).listen(8080);