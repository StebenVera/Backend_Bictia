var fs  = require('fs'),
    file = './juegos.txt',
    newfile = './juego_PROMISES.txt'
    promise = new Promise((resolve,reject)=>{
        fs.access(file,fs.F_OK,function (err) {
            return (err) ? reject(new Error('Archivo inexistente')):resolve(true)
        })
    })
    // el resolve pasa a la promesa
    promise.then((dataPromise) =>{
        console.log('el archivo existe');
        return new Promise((resolve,reject)=>{
            fs.readFile(file,function (err,data) {
                return (err) ? reject(new Error('Problemas al leer el archivo')):resolve(data)
            })
        })
    }).then((dataPromise) =>{
        console.log('Lectura exitosa del archivo')
        return new Promise((resolve,reject) =>{
            fs.writeFile(newfile,dataPromise,function (err) {
                return(err)? reject(new Error('No fue posible copiar el archivo')):resolve('Se ha copiado con exito')
            })
        })
    }).then((dataPromise)=>{
        console.log(dataPromise)
    }).then((dataPromise) =>{
        console.log(dataPromise)
    })