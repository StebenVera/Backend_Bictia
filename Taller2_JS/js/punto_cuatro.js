var cuadro_rojo = document.getElementById("rojo");
var cuadro_azul = document.getElementById("azul");
var cuadro_verde = document.getElementById("verde");
var cuadro_morado = document.getElementById("morado");
var cuadro_amarillo = document.getElementById("amarillo");
var body = document.getElementsByTagName("body")[0];


function mouseOver() {
    body.style.background = "red";
}

function mouseOver2() {
    body.style.background = "blue";
}

function mouseOver3() {
    body.style.background = "green";
}

function mouseOver4() {
    body.style.background = "purple";
}

function mouseOver5() {
    body.style.background = "yellow";
}

function mouseOut() {
    body.style.background = "transparent";
}




cuadro_rojo.addEventListener("mouseover",mouseOver);
cuadro_rojo.addEventListener("mouseout",mouseOut);

cuadro_azul.addEventListener("mouseover",mouseOver2);
cuadro_azul.addEventListener("mouseout",mouseOut);

cuadro_verde.addEventListener("mouseover",mouseOver3);
cuadro_verde.addEventListener("mouseout",mouseOut);

cuadro_morado.addEventListener("mouseover",mouseOver4);
cuadro_morado.addEventListener("mouseout",mouseOut);

cuadro_amarillo.addEventListener("mouseover",mouseOver5);
cuadro_amarillo.addEventListener("mouseout",mouseOut);