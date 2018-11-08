var http = require('http'), 
fs = require('fs')


http.createServer(function(req,res)
{
    fs.readFile('./index.html',function(err,html)
    {
        var html_string = html.toString();

        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        var nombre = 2+2

        for (var i =variables.length-1; i >= 0; i--) {
           var value = eval(variables[i])  //eval convierte el texto en una variable

           html_string =  html_string.replace("{"+variables[i]+"}",value);
        
        }

        res.write(html_string)
        res.end()
    })
}).listen(8080)