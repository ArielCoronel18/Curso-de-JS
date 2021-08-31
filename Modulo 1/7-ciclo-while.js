var contador = 0;
var serie = 0;

while(serie < 100){
    var esImpar = contador % 2;
    if(esImpar){
        serie += 2;
    }else{
        serie += 3;
    }
    contador++;
}

alert(contador);