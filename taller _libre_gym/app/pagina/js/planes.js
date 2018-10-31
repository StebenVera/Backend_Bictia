// funcion click planes
var formulario = document.getElementsByName("formulario_registro")[0];
var h1_form = document.getElementById("h1_reg")
var elementos = formulario.elements




(function(){
   
    function cambio_color(params) {
      //  console.log("hola")
      
      
        h1_form.style.color ="#ff7517";
        
              
      
      
      
    };

    function cambio_color2(params) {
        //  console.log("hola")
        
        
          h1_form.style.color ="white";
                
        
        
        
      };

    //cumple una funcion cada vez que se cumple un tiempo
    setInterval(cambio_color,1000);
    setInterval(cambio_color2,2000);

    //se repite cada 2000

    //setInterval(saludo,2000);
}())



function  validarNombre(e) {
    
        if (formulario.nombre.value == 0) {
        
        alert("Debe completar el campo Nombre")
        
        e.preventDefault()
        
        }
        
        }
        
function  validarCedula(e) {
    
                if (formulario.cedula.value == 0 ) {
                
                alert("Debe completar el campo Cedula")
        
                e.preventDefault()
                
                }

                if(formulario.cedula.value.length <10)
                {
                        alert("La cédula debe tener minomo 10 caracteres")
        
                        e.preventDefault()   
                }
                
                }
        
        
        function 
        validarRadio(e) {
        
        if (formulario.tp_plan[0].checked == true || formulario.tp_plan[1].checked == true || formulario.tp_plan[2].checked == true) {
        
        } 
        else {
        
        alert("Debe especificar un Plan")
        
        e.preventDefault()
        
        }
        
        }
        
        
        
               
        
        
        var validar= function(e){
        
            validarNombre(e)
        
            validarRadio(e)
            
            validarCedula(e)      
            
        
        }
        
        
        
        formulario.addEventListener("submit",validar)