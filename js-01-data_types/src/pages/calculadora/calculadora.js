/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300
*/

//const edad = document.getElementById('birthdate').value;

function obtenerNumero() {
    //const edadInput = document.getElementById('birthdate').value;
    //edadNumber = Number(edadInput);
    //return edadNumber;
    return Number(document.getElementById('birthdate').value);

}

function calculoMeses(edadNumber) {
    //let meses = edadNumber * 12;
    return edadNumber * 12;
}

function mandarMensaje(meses) {
    // mensajeUsuario = `Tu edad en meses es: ${meses}`;
    document.getElementById('result').innerHTML = `Tu edad en meses es: ${meses}`;
}

function llamadaHTML(){
    return mandarMensaje(calculoMeses(obtenerNumero()));
}