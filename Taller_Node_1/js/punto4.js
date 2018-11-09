var http = require("http"), fs = require("fs")




http.createServer(function(req,res){
    fs.readFile('../index_4.html',function(err,html)
    {
        html.write('<body style = background-color:red></body>')
        var html_string = html.toString();

      //  html_string =  html_string.replace("<body>","<body style = background-color:red>");
     
        var nombre = "Daiver Steben"
        var apellido = "Aragon Vera"
        var edad = "25"
        var universidad = "U.Central"
        
      var variables = html_string.match(/[^\{\}]+(?=\})/g);

      for (var i =variables.length-1; i >= 0; i--) {
         var value = eval(variables[i])  //eval convierte el texto en una variable

         html_string =  html_string.replace("{"+variables[i]+"}",value);
      
      }

         res.write(html_string)

    
        res.end()
    })
        


}).listen(8080)