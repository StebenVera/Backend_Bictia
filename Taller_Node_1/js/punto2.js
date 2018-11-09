//En nuestro HTML imprimir un contador que nos 
//mostrará las peticiones que hagamos
//a nuestro servidor.

var http = require("http"), fs = require("fs")


var cnt = 0;

http.createServer(function(req,res)
{
   
   
    if(req.url != '/favicon.ico')
    {
        cnt ++;
    }
    fs.readFile('../index_punto_2.html',function(err,html)
    {
        var html_string = html.toString();

        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        for (var i =variables.length-1; i >= 0; i--) {
           var value = eval(variables[i])  //eval convierte el texto en una variable

           html_string =  html_string.replace("{"+variables[i]+"}",value);
        
        }

        res.write(html_string)
        res.end()
    })
    
}).listen(8080)

