let fecha = new Date(2021, 0, 1);
let hoy = new Date();
// console.log(fecha);
// console.log (hoy);

let ano = fecha.getFullYear();
/* console.log (ano);
console.log (fecha.getMonth());
console.log (fecha.getDate()); */

//console.log(fecha);
fecha.setDate(fecha.getDate() + 15);
//console.log(fecha);

let fecha1 = new Date(2021, 0, 1, 12, 30);
let fecha2 = new Date(2021, 1, 18, 14, 30);

fecha1.setHours(0, 0, 0);
fecha2.setHours(0, 8, 0);
if(fecha1.getTime() == fecha2.getTime()){
    console.log(`Las fechas son iguales`);
}else{
    console.log (`Las fechas son diferentes`);
}

let intervalo = fecha2 - fecha1;
let dias = intervalo / (24 * 60 * 60 * 1000);
console.log(intervalo);
console.log(dias);