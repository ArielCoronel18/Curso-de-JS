const mostrarError = (e) => {
    console.log('Error', e.error);
    console.log('Mensaje', e.message);
    console.log('Linea', e.lineno);
    console.log('Columna', e.colno);
    console.log('Url', e.filename);
}

addEventListener('error', mostrarError);
miFuncion();
