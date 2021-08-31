const vender = (cantidad, existencia) => {
    if (cantidad > existencia) {
        const error = {
            name: 'Error Existencia',
            message: 'La cantidad solicitada excede la existencia'
        }

        throw error;
    } else {
        existencia -= cantidad;
        return existencia;
    }
};

try {
    const existenciaTotal = vender(5, 10);
    console.log(existenciaTotal);
}
catch(error) {
    console.log(`${error.name}: ${error.message}`);
}