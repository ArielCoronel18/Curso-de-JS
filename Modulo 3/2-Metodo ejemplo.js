let triangulo = {
    base: 0,
    altura: 0,
    inicializar: function(b, a){
        triangulo.base = b;
        triangulo.altura = a;
    },
    mostrarDatos: function(){
        console.log(`Base: ${triangulo.base}\r\nAltura: ${triangulo.altura}`)
    },
    area: function(){
        // area = b*a/2
        let area = (triangulo.base * triangulo.altura) / 2;
        return area;
    },
    hipotenusa: function(){
        // c^2 = a^2 + b^2 => c = raiz a^2 + b^2 
        let hipotenusa = Math.sqrt(triangulo.base ** 2 + triangulo.altura ** 2);
        return hipotenusa;
    },
    perimetro: function(){
        let perimetro = triangulo.base + triangulo.altura + triangulo.hipotenusa();
        return perimetro;
    }
}

triangulo.inicializar(50, 70);
triangulo.mostrarDatos(); 
let areaTriangulo = triangulo.area();
console.log(`Area: ${areaTriangulo}`);
console.log(`Hipotenusa: ${triangulo.hipotenusa()}`);
console.log(`Perimetro: ${triangulo.perimetro()}`);