//Identificacion de elementos

var video = document.getElementById("et_video")
var btn_play = document.getElementById("btn_play");
var btn_stop = document.getElementById("btn_stop");
var btn_reload = document.getElementById("btn_reload");
var btn_up = document.getElementById("btn_subir");
var btn_down = document.getElementById("btn_bajar");


function reproducir() {
    video.play();
}
function detener() {
    video.pause();
}
function subir_v() {
    video.volume+=0.1;
    if(video.volume == 1)
    {
        alert("Volumen Maximo");
    }
}

function bajar_v() {
    video.volume-=0.1;
    if(video.volume <= 0.1)
    {
        alert("Volumen Minimo");
    }
    
}

btn_play.addEventListener("click",reproducir);
btn_stop.addEventListener("click",detener);
btn_down.addEventListener("click",bajar_v);
btn_up.addEventListener("click",subir_v);