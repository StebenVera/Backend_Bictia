(function () {

    var formulario = document.getElementsByName("formulario")[0]
    
    var elementos = formulario.elements
    
    var boton  = document.getElementById("boton")
    
    
    
    function  validarNombre(e) {
    
    if (formulario.nombre.value == 0) {
    
    alert("Debe completar el campo Nombre")
    
    e.preventDefault()
    
    }
    
    }
    
    
    
    function 
    validarRadio(e) {
    
    if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
    
    } 
    else {
    
    alert("Debe especificar su sexo")
    
    e.preventDefault()
    
    }
    
    }
    
    
    
    function 
    validarTerminos(e){
    
    if(formulario.terminos.checked==false){
    
    alert("Debe aceptar los términos")
    
    e.preventDefault()
    
    }
    
    }
    
    
    
    var validar= function(e){
    
        validarNombre(e)
    
        validarRadio(e)
    
        validarTerminos(e)
    
    }
    
    
    
    formulario.addEventListener("submit",validar)
    
    }())