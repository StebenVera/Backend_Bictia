var imagen = document.getElementById("imagen1");
var btn_zoom = document.getElementById("zoom");
var btn_zoomout = document.getElementById("zoomout");
var cont3 = 0;
var cont2 = 0; 
var an = imagen.clientWidth;
var al = imagen.clientHeight;




function zoom() {
        cont2 += 5;
        imagen.style.width =  (an+cont2) +'px';
        imagen.style.height = (al+cont2) + 'px';
    
}

function zoomout() {
    cont3 += 5;
    imagen.style.width =  (an-cont3) +'px';
    imagen.style.height = (al-cont3) + 'px';


}

btn_zoomout.addEventListener("click",zoomout);
btn_zoom.addEventListener("click",zoom);