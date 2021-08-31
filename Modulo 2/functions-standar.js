
// let miValor = 'Hola';

// if(isNan(miValor)){
//     console.log('${miValor} no es un numero ');
// }else{
//     console.log('S{miValor} no es un numero ');
// }

// let miValor = '25.58';

// if(isNaN(miValor)){
//     console.log(`${miValor} no es un numero` );
// }else{
//     let miNumero = parseFloat(miValor);
//     console.log(`${miValor} es un numero` );
//     console.log(miNumero);
// }
let nombre = 'Ariel Coronel';
let codificado = encodeURIComponent(nombre);
let decodificado = decodeURIComponent(codificado);
let url = `http://mipagina.com/perfil/${codificado}`;

console.log(url);
console.log(decodificado);