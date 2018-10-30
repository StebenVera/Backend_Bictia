/*(function(){
   
    function saludo(params) {
      //  console.log("hola")
      alert("HOla");
    };

    //cumple una funcion cada vez que se cumple un tiempo
    setTimeout(saludo,2000);

    //se repite cada 2000

    //setInterval(saludo,2000);
}())*/


(function(){
    var cont = 0;
    function saludo() {
        cont++;
       // console.log(cont);

        document.write(cont + "<br>");

        if(cont === 5)//mismo valor y mismo tipo de dato 
        {
            clearInterval(intervalo);
        }
    }

        //setTimeout(saludo,2000);

        var intervalo = setInterval(saludo,2000);
}())


//fechas
//al no devolver un parametro, tomara a fech actual del pc
/*
var fecha = new Date();

document.write(fecha.getHours()+"<br>");
document.write(fecha.getMinutes()+"<br>");
document.write(fecha.getSeconds()+"<br>");
document.write(fecha.getDay()+"<br>");
document.write(fecha.getDate()+"<br>");
document.write(fecha.getMonth()+"<br>");
document.write(fecha.getFullYear());
*/



