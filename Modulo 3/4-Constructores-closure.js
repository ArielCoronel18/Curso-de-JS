let constructor = (nombreInicial, edadInicial) => {
    let nombre = nombreInicial;
    let edad = edadInicial
    let objeto = {
        'talla camisa': 'M',
        equipo:  {
            SO: 'Windows',
            marca: 'HP',
        },
        mostrarDatos: function(){
            console.log(`Nombre: ${nombre}\r\nEdad: ${edad}`);
        }, 
        cambiarNombre: function(nuevoNombre){
            let anterior = nombre;
            nombre = nuevoNombre;
            return anterior;
        }
    }
    return objeto;
 }

let empleado1 = constructor('Esteban', 31);
let empleado2 = constructor('Ariel', 32);
let empleado3 = constructor('Gaby', 28);
// empleado1.mostrarDatos();
// empleado2.mostrarDatos();

//empleado3.mostrarDatos();
// empleado3.cambiarNombre('Gabriela');
empleado3.nombre = 'Gabriela';
//empleado3.mostrarDatos();

console.log(empleado3);