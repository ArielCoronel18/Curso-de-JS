function iniciar() {
    let elemento = document.getElementById('subtitulo');
    elemento.style.width = '300px';
    elemento.style.border= '5px solid red';
    elemento.style.padding = '20px';
}

function modificarProps() {
    let elemento = document.getElementById('subtitulo');
    let ancho = elemento.querySelector.clientWidth;

    ancho += 100;

    elemto.style.width = `${ancho}px`;
}

function cambiarColor() {
    let elemento = document.getElementById('subtitulo');
    elemento.className = 'colorNegro';
}

function switchColor () {
    let elemento = document.getElementById('subtitulo');
    let color = `colorAzul`;
    elemento.classList.toggle(color);
}

function cambiarTexto() {
    let elemento = document.getElementById('subtitulo');
    let texto = `${elemento.innerHTML} Bienvenidos`;
    elemento.innerHTML = texto;
}

function agregarElemento () {
    let elemento = document.querySelector('section');
    //elemento.innerHTML = "<p> Este es un texto nuevo <p>"
    elemento.insertAdjacentHTML("beforeend", "<p class='colorAzul'>Estes es un texto nuevo <p>")
}