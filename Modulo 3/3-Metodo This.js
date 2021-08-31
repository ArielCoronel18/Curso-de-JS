let trabajador = {
    nombre: 'Juan',
    edad: 30,
    mostrarDatos: function(){
        console.log(`Nombre: ${this.nombre}\r\nEdad: ${this.edad}`);
    },
    cambiarNombre: function(nombreNuevo){
        let nombreAntiguo = this.nombre;
        empleado.nombre = nuevoNombre;
        return nombreAntiguo;
    },
};

trabajador.mostrarDatos();