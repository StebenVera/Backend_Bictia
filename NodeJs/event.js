var EventEmitter = require("events").EventEmitter,
    publicar = new EventEmitter


    publicar.on('mievento',function (mensaje) {
        console.log(mensaje);
    })


    //once se ejecuta una sola vez
    publicar.once('mievento',function(mensaje) {
        console.log('Solo motrare este mensaje una sola vez'+mensaje)
    })


    publicar.emit('mievento','SOY UN EMISOR DE EVENTOS (emitido por primera vez)')

    publicar.emit('mievento','Emitiendo por Segunda  vez')
    publicar.emit('mievento','Emitiendo por Tercera  vez')
    publicar.removeAllListeners('mievento')

    publicar.emit('mievento','Emitiendo por cuarta vez')
