/*
Crear un script que muestre una palabra o frase ingresada al revés y que indique
cuántas letras y espacios tiene.
*/
//Zona de Variables

var frase = "";
var frase2 = "";
var cont = 0;

frase = prompt("Ingrese Una frase");
for ( contador = 0; contador < frase.length; contador++) {
    if(frase.charAt(contador) == " ")
    {
        cont++;
    }
    
}

    

alert("La frase tiene "+(frase.length - cont)+" letras");
alert("La frase tiene "+cont+" espacios");

for ( contador = frase.length; contador >= 0; contador--) {
    
    frase2 = frase2 +frase.charAt(contador);
    
}
alert(frase2);