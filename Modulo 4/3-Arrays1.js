// let listas = new Array (10, 43, 56, 27, 100, 76);
let lista = [10, 43, 56, 27, 100, 76, 56];
//console.log (`Nuestro listado tiene ${lista.length} elementos`);

let suma = 0;

for(let i = 0; i < lista.length; i++){
    suma += lista[i]; 
}
//console.log(`El total de la suma es: ${suma}`);

let subLista = lista.slice(0, 3);
//console.log(`Mi sublista es: ${subLista}`);

let listaPar = lista.filter((item) => {
    return item % 2 == 0;
})
//console.log(`El listado de pares es: ${listaPar}`);

let listaImPar = lista.filter((item) => {
    return item % 2 == 1;
})
//console.log(`El listado de impares es: ${listaImPar}`);

let cadenaArray = lista.join('-');
//console.log(cadenaArray);

let valor = 56;
let index = 0;
let contador = 0;
//console.log(`El valor de ${lista[index]} se encuentra en el indice ${index}`);

while(index >= 0 ){
    index = lista.indexOf(valor, index);
    if (index >= 0){
        index++;
        contador++;
    }
}
//console.log(`Existen ${contador} elementos con el valor ${valor}`);

// console.log(lista);
// lista.push(1500, 2000);
// console.log(lista);

let nuevaLista = [1, 2, 3, 4, 5];
let grupo = lista.concat(nuevaLista);
//console.log(grupo);

// grupo.shift();
// grupo.pop();
// console.log(grupo);

// let subLista2 = grupo.slice(0, 3);
// let removidos = grupo.splice(0, 3);
// console.log(subLista2);
// console.log(removidos);

// grupo.reverse();
// console.log(grupo);

console.log(lista);
lista.sort((a,b) => {return a > b});
console.log (lista);

let nuevoListado = lista.map((item) => {return item * 10});
console.log (nuevoListado);