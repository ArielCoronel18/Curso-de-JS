let circulo = (r) => {
    let radio = r;
    return {
        obtenerRadio: function () {
            return radio;
        },
        perimetro: function () {
            return 2 * Math.PI * radio;
        },
        area: function () {
            return Math.PI * Math.pow(radio, 2);
        }
    };
};

function calcular() {
    const resultados = document.getElementById('resultados');
    let radio = document.getElementById('radio').value;

    if (isNaN(radio)) {
        alert('Ingrese un número valido');
        resultados.style.display = 'none';
    } else {
        resultados.style.display = 'block';
        radio = new Number(radio);
        const objCirculo = circulo(radio);
        document.getElementById(
            'radioActual'
        ).innerHTML = `Radio ${objCirculo.obtenerRadio()}cm`;
        document.getElementById(
            'perimetro'
        ).innerHTML = `El perimetro es de  ${objCirculo.perimetro()}cm`;
        document.getElementById(
            'area'
        ).innerHTML = `El area es de ${objCirculo.area()}cm<sup>2</sup>`;
    };
};