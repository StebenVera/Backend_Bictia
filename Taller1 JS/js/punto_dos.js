/*
Crear un script que realice las tablas de multiplicar del 1 al 10. Mostrar el resultado en
un alert de acuerdo a la tabla
*/
//Inicializamod Variables
var multiplicando = 0;

multiplicando = prompt("Por favor ingrese la tabla de multiplica que quiere");
if(multiplicando > 0)
{
    for ( contador = 1; contador <= 10; contador++) {
        
        alert(multiplicando+" x "+contador+" = " +(multiplicando*contador) );
    }
}
else
{
    alert("El numero Ingresado no es valido");
}