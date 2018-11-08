//Nos trae el modulo http
//la variable se acosjea que se llame igual que el modulo
var http = require("http")

var controlador = function (peticion,respuesta) {
    console.log('recibido')
    respuesta.end('Bienvenido a Node.js')
}

//Al pasar una funcion como parametro estabamos enviado un CallBack
var servidor = http.createServer(controlador)
//porque puerto va a recibir estas peticiones
//3000
servidor.listen(8080)