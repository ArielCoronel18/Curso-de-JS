// let cadena = new estring('Hola Mundo!');
let cadena = 'Hola Mundo';

let mensaje = `nuestro texto tiene ${cadena.length} caracteres`;
//console.log(mensaje);

let texto = '';
for (let i = 0; i < cadena.length; i++ ){
    texto += cadena[i] + '.'
}
//console.log(texto);

console.log (cadena.toUpperCase());
console.log (cadena.toLowerCase());
console.log (cadena.substr(0, 6));
console.log (cadena.substr(5));
console.log (cadena.substr(-3));
console.log (cadena.startsWith(`Hox`));
console.log (cadena.endsWith(`do`));
console.log (cadena.includes(`x`));
console.log (cadena.indexOf(`Mundo`));
console.log (cadena.replace(`Mundo`, 'a todos'));
// if (cadena.startsWith(`Ho`)){
//     console.log(`si comienza con Ho`)
// }