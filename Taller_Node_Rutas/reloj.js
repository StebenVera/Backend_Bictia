function relo() {
    var EventEmitter = require('events').EventEmitter,
util = require('util').inherits

var Clock = function (params) {
    var mismo = this;


    setInterval(function() {
        mismo.emit('tictac')
    },1000)
}


util(Clock,EventEmitter)

Clock.prototype.tiempo = function () {
    var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hora = hrs+':'+min+':'+sec

         console.log(hora);
        //return hora;
        
}


var reloj = new Clock();

reloj.on('tictac',function () {
    reloj.tiempo()
})

}

var reloj  = relo();

module.exports.reloj = reloj;