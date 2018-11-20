class Persona{


constructor(nombre,edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }


    presentarse(){
        return 'HOla me llmao'+this.nombre+'y tengo'+this.edad+'años'
    }

}

var persona = new Persona('kamilo',27);

persona.presentarse();

console.log(persona);


class Profesion extends Persona{

    constructor(nombre,edad,cargo){
        super(nombre,edad);
        this.cargo = cargo;
    }

    presentarse(){
        return super.presentarse()+' '+'y soy'+this.cargo
    }
}


var steben = new Profesion('kamilo',27,'Instructor');
steben.presentarse();
console.log(steben.presentarse());
