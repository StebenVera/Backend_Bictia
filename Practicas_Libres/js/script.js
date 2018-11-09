var div_padre = document.getElementById("tabla");

var btn_agregar = document.getElementById("btn_agregar");

var btn_eliminar = document.getElementById("btn_eliminar");

var txt_agregar = document.getElementById("txt_agregar");

var txt_eliminar = document.getElementById("txt_eliminar");

var ref_producto = document.getElementsByClassName("ref");

var i = 0;

var aux = 0;

function agregar() {


    aux = 1;
    if(!/^([0-9])*$/.test(txt_agregar.value) || !/^[^]+$/.test(txt_agregar.value))
    {
        alert("Solo puede ingresar valores numericos, el campo no puede estar vacio")
    }
    else {
            for (let i = 0; i < ref_producto.length; i++) {
               
                if(txt_agregar.value == ref_producto[i].innerHTML){
                    var num_aleatorio = Math.round(Math.random()*200);
                    var div_item = document.createElement("div");
                    var id_p = document.createElement("p");
                    var referencia = document.createElement("p");
                    var valor_ref = document.createTextNode(txt_agregar.value);
                    var valor_id = document.createTextNode(num_aleatorio);
                    div_item.setAttribute("id",num_aleatorio);
                    referencia.appendChild(valor_ref);
                    id_p.appendChild(valor_id);
                    div_item.appendChild(id_p);
                    div_item.appendChild(referencia);
                    div_padre.appendChild(div_item);
                    alert("Producto Agregado Correctamente");
                    aux = 0;
                }
                
                
            }
            

            if(aux == 1)
            {
                alert("La referencia ingresada no existe");
            }
        }
        
    }


function eliminar(){

    if(!/^([0-9])*$/.test(txt_eliminar.value) || !/^[^]+$/.test(txt_eliminar.value))
    {
        alert("Solo puede ingresar valores numericos, el campo no puede estar vacio")
    }
    else{
        var item = document.getElementById(txt_eliminar.value);
       
        try
        {
            div_padre.removeChild(item);
            alert("Producto Eliminado Correctamente");
        }
        catch(e)
        {
            alert("El id ingresado no existe");
        }
    }
        
  

}






btn_agregar.addEventListener("click",agregar);
btn_eliminar.addEventListener("click",eliminar);