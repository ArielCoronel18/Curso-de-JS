function agregarElemento() {
    let elemento = document.querySelector('section');
    let nuevo = document.createElement('p');
    nuevo.innerHTML = 'Este es un nuevo elemento';
    elemento.appendChild(nuevo);
}

function eliminarElemento () {
    let elemento = document.querySelector('section');
    let eliminar = document.getElementById('subtitulo');

    elemento.removeChild(eliminar);
}