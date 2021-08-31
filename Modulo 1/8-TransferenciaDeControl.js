var lista = [2, 4, 6, 8, 10];
var total = 0;

for (var i = 0; i < 5; i++){
    var numero = lista[i];
    if ( numero == 6){
        continue;  /*Suma los numeros existentes sin contar el numero estipulado*/
        /*break   /*Suma todos los numeros hasta llegar al numero estipulado sin cumarlo*/
    }
    total += numero;
}

alert(total);