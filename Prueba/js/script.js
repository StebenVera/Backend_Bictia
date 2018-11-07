//Zona para obtener elementos
var txtref = document.getElementById("txt_ref");
var div_padre = document.getElementById("lista");
var btn_agregar = document.getElementById("btn_agregar");
var btn_eliminar = document.getElementById("btn_quitar");
var btn_comprar = document.getElementById("btn_comprar");
var find_p = document.getElementsByTagName("p");
var find_ref = document.getElementsByClassName("ref");
var precio1 = document.getElementById("precio1");
var prueba = document.getElementById("prueba");
var contador2;
var contador;
var precio;


function validarReferencia(e) {
    if(txtref.value == 0){
        alert("Ingrese una Referencia");
    }
    else{
        for ( contador2 = 0; contador2 < find_ref.length; contador2++) {
        
            if(txtref.value == find_ref[contador2].innerHTML){
                var txt = find_ref[contador2].innerHTML
                var txt_value = txtref.value
                agregar(txt,txt_value);  
                alert("Producto agregado con exito")
                
            }
            
           
        } 
    }
    e.preventDefault();
    
}

function validarReferencia2(e) {
    if(txtref.value == 0){
        alert("Ingrese una Referencia");
    }
    else{
        for ( contador2 = 0; contador2 < find_ref.length; contador2++) {
            
            if(txtref.value == find_ref[contador2].innerHTML){
                var txt_value = txtref.value
                eliminar(txt_value);  
                
                
            }
            
           
        } 
    }
    e.preventDefault();
    
}

var activar_vali = function(e)
{
    validarReferencia(e);
}

var activar_vali2 = function(e)
{
    validarReferencia2(e);
}


function agregar(txt,txt_value) {
    if(txt_value == "balones_01")
    {
        precio = 5000;
    }
    if(txt_value == "guayos_01")
    {
        precio = 3000;
    }
    if(txt_value == "guantes_01")
    {
        precio = 2000;
    }
    
    var elemento_p2 = document.createElement("p")
    var elemento_p = document.createElement("p")
    var espacio = document.createElement("br")
    //elemento_p.setAttribute("class",txt_value)
    elemento_p.setAttribute("class","inline_block"+" "+txt_value)
    elemento_p2.setAttribute("class","inline_block"+" "+txt_value)
    var contenido = document.createTextNode(txt)
    var contenido2 = document.createTextNode(precio)
    elemento_p.appendChild(contenido);
    elemento_p2.appendChild(contenido2);
    div_padre.appendChild(elemento_p);
    div_padre.appendChild(elemento_p2);
    div_padre.appendChild(espacio);
    
}

function eliminar(txt_value) {
     
    
    var x = document.getElementsByClassName(txt_value);
    var i=0;
      //  for (i = 0; i < x.length; i++) {
          if(x.length > 0){
            while (i<=x.length) {
                div_padre.removeChild(x[i]);
                i++;
                alert("Producto Eliminado con Exito");
              }
             // alert("Producto Eliminado con Exito");
          }
          else{
              alert("No hay ningún producto que eliminar de este tipo");
          }
          
}

function comprar(txt_value) {
    
    if(div_padre.length > 0){
       alert("si")
      }
    else{
        alert("No hay Productos para comprar")
    }
}


//Zona para agregar eventos
btn_eliminar.addEventListener("click",activar_vali2)
btn_agregar.addEventListener("click",activar_vali);
btn_comprar.addEventListener("click",comprar)
