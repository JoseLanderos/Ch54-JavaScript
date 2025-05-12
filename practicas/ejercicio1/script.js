function cambioNombre(){
    let nombre = prompt('Cual es tu Nombre:');
    let nuevoContenido = `Hola ${nombre}!`;
    document.getElementById('title').innerHTML = nuevoContenido;
}