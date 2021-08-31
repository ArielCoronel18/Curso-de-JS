let empleado = {
    nombre: 'Ariel',
    edad: 32,
    'talla camisa': 'M',
    equipo: {
        SO: 'Windows',
        marca: 'HP',
       },
    mostrarDatos: function(){
        console.log(`Nombre: ${this.nombre}\r\nEdad: ${this.edad}`);
    },
    cambiarNombre: function(nuevoNombre){
        let anterior = this.nombre;
        this.nombre = nuevoNombre;
        return anterior;
    }, 
};

let empleado1 = Object.create(empleado);
let empleado2 = Object.create(empleado);
empleado1.cambiarNombre('Esteban');
empleado1.edad = 30;
empleado2.cambiarNombre('Gabriela');
empleado2.edad = 28;

empleado.mostrarEdad = function(){
    console.log(this.edad);
}

empleado2.mostrarEdad();
empleado1.mostrarEdad();
// empleado1.mostrarDatos();
// empleado.mostrarDatos();