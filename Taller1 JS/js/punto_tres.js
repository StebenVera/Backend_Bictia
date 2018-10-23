//Inicializamos Variables
var edades = [];
var n_personas = 0;
var promedio = 0;
var sum_edades =0;
n_personas = parseInt(prompt("Por favor ingrese el numero de Personas que desea calcular edad Promedio"));

if (n_personas > 0 )
{
    for (contador = 1; contador <= n_personas ; contador++) {
        edades[contador] = parseInt( prompt("Ingrese la edades para la Persona#"+contador));
        if(edades[contador] < 0)
        {
            alert("Porfavor ingrese una edad correcta");
            contador--;
        }
            sum_edades = sum_edades + edades[contador];
        
    }
        
        promedio =  sum_edades / n_personas;
    
        console.log("promedio= "+sum_edades+" / "+n_personas);
    alert("El promedio de las personas es: "+promedio +"Años");
   

   
}
else
{
    alert("Por favor ingrese un numero valido de Personas");
}
