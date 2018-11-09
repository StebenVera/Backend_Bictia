//Imprimir en consola (terminal de comandos) un saludo que deseen de manera
//automática cada 2 segundos.


var http = require("http");

var cont = 0
var controlador = function(peticion,respuesta)
{
    function saludo(){
        cont ++;
        console.log('Hola'+cont);
        respuesta.end();
    }
    var tiempo = setInterval(saludo,2000)
   
}


var servidor = http.createServer(controlador);

servidor.listen(8080);

