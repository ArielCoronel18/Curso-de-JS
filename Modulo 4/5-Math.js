let valor = new Number(123.645);
// console.log (valor);

// console.log(Math.PI);
// console.log(Math.E);
console.log(`Ceil: ${Math.ceil(valor)}`);
console.log(`Floor: ${Math.floor(valor)}`);
console.log(`Round: ${Math.round(valor)}`);
console.log(`Trunc: ${Math.trunc(valor)}`);

console.log(`ABS: ${Math.abs(-50)}`);
console.log(`Max: ${Math.max(324, 864, 100, 456)}`);
console.log(`Min: ${Math.min(324, 864, 100, 456)}`);

console.log(`Random ${Math.random()}`);

let limiteMax = 25;
let limiteMin = 15;
let intervalo = Math.floor(Math.random() * (limiteMax - limiteMin) + limiteMin);
console.log(`Número aleatorio entre ${limiteMin} - ${limiteMax} : ${intervalo}`);

console.log(`Pow: ${Math.pow(2, 10)}`);
console.log(`SQRT: ${Math.sqrt(36)}`);