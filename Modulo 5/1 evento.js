const agregarEvento = () => {
    const elemento = document.querySelector('section > button');
    elemento.addEventListener('click', mostrarMensaje);

    let lista = document.querySelectorAll('section > p');

    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i];
        const random = Math.random();
        elemento.addEventListener('click', cambiarColor);
        elemento.addEventListener('click', (e) => {
            cambiarContenido(e, random, i);
        });
    };
};

const cambiarContenido = (e, valor, indice) => {
    e.target.innerHTML = `Valor ${indice}: ${valor}`;
}

const cambiarColor = (e) => {
    e.target.style.backgroundColor = '#999999';
}

const mostrarMensaje = (e) => {
    alert(`Evento: ${e}\r\nTarget: ${e.target}\r\nTipo: ${e.type}`);
};

addEventListener('load', agregarEvento);