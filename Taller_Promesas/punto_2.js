let promesa_despertar = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //alarma=1 es que sono alarma=0 no sono
        let alarma = 1;
       
        if(alarma == 1)
        {
            resolve('06:00am Me desperte a las 06:00am')
        }else{
            reject('La alarma no sono')
        }
    }, 2000);
})

let promesa_alistarse = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //trasmilenio =1 pudo cojer trasmilenio , trasmilenio= 0no pudo cojer trasmilenio
        let trasmilenio = 1
        if(trasmilenio == 1){
            resolve('7:00 am Sali a las y pude cojer trasmilenio')
        }
        else{
            reject('Paro en el portal y no pude cojer trasmilenio')
        }
    }, 4000);
})

let promesa_estudio = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //hora =1 pudo entrar a estudiar , hora= 0 no pudo entrar estudiar
        let hora = 1
        if(hora == 1){
            resolve('08:15am Entre a estudiar')
        }
        else{
            reject('Llegue y tarde y no pude entrar a estudiar')
        }
    }, 6000);
})



let promesa_almuerzo = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //almuerzo =1 pudo entrar a estudiar , almuerzo= 0 no pudo entrar estudiar
        let almuerzo = 1
        if(almuerzo == 1){
            resolve('12:00pmsali del estudio y almorce')
        }
        else{
            reject('No pude almorzar porque me salio un pelo en la sopa')
        }
    }, 8000);
})


let promesa_trabajo = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //trabajo =1 va a trabajr en bellatrix , trabajo= 0 se olvida del carnet y no lo dejan ingresar
        let trabajo = 1
        if(trabajo == 1){
            resolve('01:00pm llego a trabajar a Bellatrix')
        }
        else{
            reject('Olvide el carnet y no me dejaron entrar')
        }
    }, 10000);
})

let promesa_salida = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //salida =1 sale del trabajo a relajarse con sus compañeros de trabajos , salida= 0 lo roban
        let salida = 1
        if(salida == 1){
            resolve('08:00pm sali del trabajo a relajarme con mis compañeros del trabajo')
        }
        else{
            reject('Me robaron')
        }
    }, 12000);
})


let promesa_casa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //casa=1 vuelve a casa , casa=0 perdi las llaves demi casa y me toca dormir en un parque
        let casa = 1
        if(casa == 1){
            resolve('11:00pm volvi a casa')
        }
        else{
            reject('Perdi las llaves de mi casa y me toco dormir en un parque')
        }
    }, 14000);
})

let promesa_netflix = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //netflix=1 se acuesta a ver netflix , netflix=0 olvido pagar la mensualidad de netflix
        let netflix = 1
        if(netflix == 1){
            resolve('01:00 am Me acoste a ver netflix')
        }
        else{
            reject('olvide pagar la mensualidad de netflix, se desbarato la cama y no tengo donde dormir')
        }
    }, 16000);
})


Promise.all([promesa_despertar,promesa_alistarse,promesa_estudio,promesa_almuerzo,promesa_trabajo,promesa_salida,promesa_casa,promesa_netflix])
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log('Error '+err)
})