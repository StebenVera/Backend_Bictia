/*
Pepe se entusiasmo con el mundo de la programación y quiere aprender JavaScript.
Ayuda a Pepe a crear un script que le ayude a saber si un número es par o impar y a su
vez indicar si es número primo

*/

//Zona de variables
var numero = 0;
var cont2 = 0;

numero = parseInt(prompt("Por favor Ingrese un numero"));

if(numero > 0)
{
    for ( contador = 1; contador <= numero; contador++) {
        if ((numero % contador) == 0)
        {
            cont2++;
        }        
    }
    if(numero % 2 == 0)
    {
        alert("EL numero "+numero+" es par");
    }
    else
    {
        alert("EL numero "+numero+" no es par");
    }

    if(cont2 <= 2)
    {
        alert("EL numero "+numero+" es primo");
    }
    else 
    {
        alert("EL numero "+numero+" no es primo");
    }
}
else{
    alert("El numero Ingresado no es valido");
}