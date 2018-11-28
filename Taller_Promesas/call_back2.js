function asincrono(valor, ejecucion) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function() {
     ejecucion(valor, valor * valor)
    }, 0 | Math.random() * 100)
    }
  

    let promesa = new Promise((resolve,reject)=>{
        var max = 10;
        var cnt = 0;
        for (var i = 0; i < max; i++) {
            ++cnt;
           // cnt=cnt+2
        asincrono(i, function(valor, resultado) {
        console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
        if (cnt === max) {
            resolve('Exito')
        
        }
        else{
            //Se genera errro cuando el cnt no es igual
            // al numero max
            //para probar descomentar la linea
            //cnt=cnt+2 y comentar ++cnt
            reject('El contador no fue igual al  numer max')
        }
        });
        }
    })

    promesa.then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
