function miObjeto(nombreInicial, edadInicial){
    this.nombre = nombreInicial;
    this.edad = edadInicial;
    this['talla camisa'] = 'M';
    this.equipo = {
        SO: 'Windows',
        marca: 'HP',
    };
    this.mostrarDatos = function(){
        console.log(`Nombre: ${this.nombre}\r\nEdad: ${this.edad}`);
    };
    this.cambiarNombre = function(nuevoNombre){
        let anterior = this.nombre;
        this.nombre = nuevoNombre;
        return anterior;
    };
}

let empleado1 = new miObjeto('Ariel', 32);
empleado1.mostrarDatos();
//console.log(empleado1);