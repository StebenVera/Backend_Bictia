/*Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre
cada carácter. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

var texto = ""
var text4 = "";
console.log(text2);
texto = prompt("Ingrese una frase");
var text2 =texto.split("")
for (contador = 0; contador < text2.length; contador++) {
    
    
    text4 = text4+text2[contador]+"-";
}
document.write(text4);