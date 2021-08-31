let empleado = {
    nombre: 'Juan',
    edad: 30,
    'talla camisa': 'M',
    equipo:  {
        SO: 'Windows',
        marca: 'HP',
    },
    mostrarDatos: function(){
        console.log(`Nombre: ${empleado.nombre}\r\nEdad: ${empleado.edad}`);
    }, 
    cambiarNombre: function(nuevoNombre){
        let anterior = empleado.nombre;
        empleado.nombre = nuevoNombre;
        return anterior;
    }
};

var anterior = empleado.cambiarNombre('Ariel');
empleado.mostrarDatos();
console.log(`El nombre anterior es: ${anterior}`);