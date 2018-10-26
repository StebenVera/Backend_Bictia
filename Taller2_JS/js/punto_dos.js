var div_padre = document.getElementById("principal");
var btn_agregar = document.getElementById("agregar");
var btn_quitar = document.getElementById("quitar");
var btn_eleccion = document.getElementById("eleccion");




//Seccion para crear variables 
 var contador = 0;


 //var contenido = document.createTextNode("Soy nuevo div");
 //array_divs[0] = elemento_div = document.createElement("div");
 // array_divs[1] = elemento_div = document.createElement("div");
// elemento_h.appendChild(contenido);

 //Seccion botones y eventos

function agregar() {
  //  div_padre.appendChild(array_divs[0]);
   // div_padre.appendChild(array_divs[1]);
        /*
        contador++;  
        console.log(contador);   
        array_divs[contador] =document.createElement("div");
        div_padre.appendChild(array_divs[contador]);*/
        contador++;
        var elemento_div = document.createElement("div");
        elemento_div.setAttribute("class","d");
        var elemento_h = document.createElement("h1");
        elemento_h.innerHTML="Div "+contador;
        div_padre.appendChild(elemento_div);
        elemento_div.appendChild(elemento_h);
        
        console.log(contador);
        
}
function quitar() {
    while (div_padre.hasChildNodes()) {
        div_padre.removeChild(div_padre.childNodes[0]);
    }
    contador = 0;
    console.log(contador);
}

function eleccion() {
        var opc =parseInt(prompt("Ingrese el numero del Div que desea borrar"));
        div_padre.removeChild(div_padre.childNodes[opc-1]);
        console.log(contador);
        
        
}

 btn_agregar.addEventListener("click",agregar);
 btn_quitar.addEventListener("click",quitar);
 btn_eleccion.addEventListener("click",eleccion);