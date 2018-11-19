-Es una Base de datos no relacional
-Es Documental
-coleccion --> tabla
-registro --->JSON  ---> BSON Byany Script Object Notation

documento = {clave:valor}
coleccion1{
    documento1 = {nombre:'kamilo'}
    documento2 = {nombre:'leonardo',edad:22}
} //no genera error ya que no debe cumplir con que cada objeto puede tener los 
  //items necesarios.

db.coleccion.insert()

db.coleccion.find()

db.coleccion.findOne()

documento.equipo