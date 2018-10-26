var div_padre = document.getElementById("principal");
var btn_agregar = document.getElementById("agregar");
var btn_quitar = document.getElementById("quitar");
var btn_eleccion = document.getElementById("eleccion");




//Seccion para crear elementos
 var array_divs = [];
 var contador = 0;
 var elemento_div = document.createElement("div");
 var elemento_h = document.createElement("h1");
 var contenido = document.createTextNode("Soy nuevo div");
 //array_divs[0] = elemento_div = document.createElement("div");
 // array_divs[1] = elemento_div = document.createElement("div");
 elemento_h.appendChild(contenido);

 //Seccion botones y eventos

function agregar() {
  //  div_padre.appendChild(array_divs[0]);
   // div_padre.appendChild(array_divs[1]);
        
        contador++;  
        console.log(contador);   
        array_divs[contador] =document.createElement("div");
        div_padre.appendChild(array_divs[contador]);
        
}

function quitar() {
        
        
              for ( cont = array_divs.length-1; cont >=0; cont--) {
                
                div_padre.removeChild(array_divs[cont]);
                contador = 0;
                }
                
                console.log(contador); 
}

function eleccion() {
        var opc =parseInt(prompt("Ingrese el numero del Div que desea borrar"));
        div_padre.removeChild(array_divs[opc]);
}

 btn_agregar.addEventListener("click",agregar);
 btn_quitar.addEventListener("click",quitar);
 btn_eleccion.addEventListener("click",eleccion);