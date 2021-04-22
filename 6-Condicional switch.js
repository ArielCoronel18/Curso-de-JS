var miProducto = 10;
var calificacion = '';
var calificacionSw = '';

if(miProducto == 1){
    calificacion = 'Aceptable';
}else{
    if(miProducto == 2){
        calificacion = 'Regular';
    }else{
        if(miProducto == 3){
            calificacion = 'Rechazado';
        }else{
            calificacion = 'Indefinido'
        }
    }
}

switch (miProducto){
    case 1 :{
        calificacionSw = 'Aceptable';
        break;
    }
    case 2 :{
        calificacionSw = 'Regular';
        break;
    }
    case 3 :{
        calificacionSw = 'Rechazado';
    }
    case 10 :{
        calificacionSw = 'Sorprendente';
        break;
    }
    default: {
        calificacionSw = 'Indefinido'
    }
}
alert(calificacionSw);