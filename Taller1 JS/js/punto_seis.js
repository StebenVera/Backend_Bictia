var mes = 0;
var dia = 0;
var age = "";
var fechas = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var seguro = 1;

dia = parseInt(prompt("Por favor ingrese el dia"));
mes = prompt("Por favor ingrese el mes");
age = prompt("Por favor ingrese el Año");

if((dia > 0 && dia < 31) && (age.length == 4))
{
    
    
    
        fechas.forEach(element => {
            if(element == mes.toLocaleLowerCase().trim())
            {
                alert(dia+" de "+element+" de "+age);
                seguro = 0;
            }
            
        });
    
        if(seguro == 1)
        {
            alert(dia+" de "+fechas[mes-1]+" de "+age);  
            seguro = 1;
        }

   
    

}
else
{
    alert("Uno de los datos es erroneo")
}