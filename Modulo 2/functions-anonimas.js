function sumatoria(a , b){
    let total = a + b;
    return total;
  }
  
  let sumatoriaAnonima = function (a, b){
    let total = a + b;
    return total;
  }
  
  let ejecutarFuncion = function (f, valor1, valor2){
    let resultado = f(valor1, valor2);
    return resultado;
  }
  
  let sumatoriaAuto = (function(a, b){
    let total = a + b;
    return total;
  })(5, 5);
  
  let sumatoriaAnonimaFlecha = (a, b) => {
    let total = a + b;
    return total;
  }
  
  let sumatoriaAnonimaFlechaAuto = ((a , b) => {
    let total = a + b;
    return total;
  })(5, 5);
  
  console.log(sumatoria(5, 5));
  console.log(sumatoriaAnonima(5, 5));
  console.log(ejecutarFuncion(sumatoriaAnonima, 5, 5));
  console.log(sumatoriaAuto);
  console.log(sumatoriaAnonimaFlecha(5, 5));
  console.log(sumatoriaAnonimaFlechaAuto);