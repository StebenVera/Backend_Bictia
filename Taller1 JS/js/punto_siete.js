/*Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre
cada carácter. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

var texto = "";
var texto2 = "";
var texto3 = [];

texto = prompt("Ingresa el texto");

for ( contador = 0; contador < texto.length; contador++) {
    
    texto3[contador]=texto[contador] + "-";
}

alert(texto3);