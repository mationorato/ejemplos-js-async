Estudiante1 = {
    nombre: "matias",
    apellido: "onorato",
    nombre_completo: function() {
        return this.nombre + " " + this.apellido
    }
}

function Estudiante2(nombre,apellido) {
    this.nombre = nombre
    this.apellido = apellido
    this.nombre_completo = function() {
        return this.nombre + " " + this.apellido
    }
}

class Estudiante3 {
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    get nombre_completo(){
        return this.nombre + " " + this.apellido
    }
}

e2 = new Estudiante2("nombre","apellido")
e3 = new Estudiante3("nombre","apellido")


console.log(e2.nombre_completo())
console.log(e3.nombre_completo)