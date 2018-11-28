let promesa = new Promise((resolve,reject)=>{
    var valor =0;
    if(valor != 0){
         resolve(valor)
    }
    else{
         reject('No se acepta cero como un parametro ')
    }
})

promesa.then((response)=>{
    console.log('Finaliza con el Valor',response,'y el resultado=',response*response)
}).catch((error)=>{
    console.log('Error',error)
})