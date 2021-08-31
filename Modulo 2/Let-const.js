var i = 'global';
function miFuncion(){
    var i = 'local';
    console.log(i);
}

miFuncion();
console.log(i);