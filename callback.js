var fs = require ('fs'),
 file = './juegos.txt',
 newfile = './juegos_CALLBACK.txt'

fs.access(file,fs.F_OK,function (err) {
    if(err){
        console.log('Archivo inexistente');

    }else{
        console.log('Archivo existente');
        fs.readFile(file,function (err,data) {
            if(err){
                console.log('No se pudo leer el archivo');
            }else{
                console.log('se ha leido exitosamente el archivo');
                fs.writeFile(newfile,data,function (err) {
                    return (err)? console.log('no se pudo copiar el archivo'):console.log('El archivo se ha copiado')
                })
            }
        })
    }
})