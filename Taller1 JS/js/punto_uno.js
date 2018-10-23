//Inicializamos Variables
var nota = [];
var n_alumnos = 0;
var re_probados = 0;
var porcentaje = 0;

n_alumnos = prompt("Por favor ingrese el numero de Alumnos");

if (n_alumnos > 0 )
{
    for (contador = 1; contador <= n_alumnos ; contador++) {
        nota[contador] = prompt("Ingrese la nota para el Alumno#"+contador);
        
        if(nota[contador] < 0 || nota[contador] > 5)
        {
            alert("Porfavor ingrese una nota correcta");
            contador--;
        }
        console.log(nota[contador]);
    }

    nota.forEach(element => {
        if(element < 4)
        {
            re_probados++;
            console.log(re_probados);
        }
    });
    
    porcentaje = (re_probados * 100)/n_alumnos;

    console.log("Porcentaje = " +"("+re_probados+""+"* 100)/"+n_alumnos+" ="+ porcentaje +" %");
    alert("EL porcentaje de estudiantes Reprobados es: "+porcentaje+"%");
    alert("La cantidad de estudiantes Reprobados es #"+re_probados);

   
}
else
{
    alert("Por favor ingrese un numero valido de alumnos");
}
