var frase = "";
var frase2 = "";
var cont = 0;
frase = prompt("Ingrese una frase por favor").toLowerCase();
frase2 =frase.trim();

for (contador = 0; contador < frase.length; contador++) {
    for ( contador2 = frase.length; contador2 > 0; contador2--) {
        
        if(frase[contador] == frase2[contador2])
        {
            cont++;
            console.log(cont);
            break;
        }
        
    }    
}

if (cont == frase.length)
{
    alert("Es un Palíndromo");
}
else{
    alert("No es un Palíndromo");
}