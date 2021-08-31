const mostrarPosicion = (e) => {
    alert(`Posicion: ${e.clientX} / ${e.clientY}`);
}

const movimiento = () => {
    const contenedor = document.getElementById('contenedor');
    contenedor.addEventListener('mousemove', moverBarra);
}

const moverBarra = (e) => {
    let barra = e.offsetX - 10;
    if (barra < 0) {
        barra = 0;
    } else if (barra > 500) {
        barra = 500;
    }

    const elementoBarra = document.getElementById('barraProgreso');
    elementoBarra.style.width = `${barra}px`;
}

const detectarTeclado = (e) => {
    const tecla = e.key;
    const bloque = document.getElementById('bloque');

    switch(tecla) {
        case '0' :
            bloque.style.backgroundColor = 'red';
            break;
        case '1' :
            bloque.style.backgroundColor = 'blue';
            break;
        case '2' :
            bloque.style.backgroundColor = 'green';
            break;
        case '3' :
            bloque.style.backgroundColor = 'black';
            break;
        case '4' :
            bloque.style.backgroundColor = 'yellow';
            break;
        default:
            bloque.style.backgroundColor = 'white';
    };
};

addEventListener('keydown', detectarTeclado);

addEventListener('load', movimiento);

addEventListener('click', mostrarPosicion);