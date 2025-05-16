/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/

const valorEdad = edad => { if (edad >= 18) return "Eres Mayor de edad";
else return "Eres menor de edad";
}

console.log(valorEdad(25));

/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/

const edadLuchadores = edad => { if (edad >= 18 && edad<=30) return "Tu luchador es Mistico";
else if (edad>=31) return "Tu luchador es el Perro Aguayo";  
else return "Tu luchador es Penta CERO MIEDO";
}

console.log(edadLuchadores(25));
console.log(edadLuchadores(35));
console.log(edadLuchadores(5));

//Bloque de codigo

{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar) // 30, 40, 50
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar) // 100, 110, 120
    }
    console.log(myVarLet, myVarConst, myVarVar) // 30, 40, 120
}

// Ejercicios mentales
let active = false
if( active === true ); {
  console.log("Está activo")
}
console.log("Fin del programa");
// --------------Ejercicio 2-----------------
active = false;
if( active )
  console.log("Está activo");
  console.log("Tiene autorización");
console.log("Fin del programa");
// --------------Ejercicio 3-----------------
active = false;
if( active ); console.log("Está activo");
//else console.log("No está activo"); // Unexpected token 'else'
// console.log("Fin del programa");


//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
                break;
        case "Borrego":
           // resultado = "Es de Yess";
              //  break;
        case "Besito":
            //resultado = " Es de Yess";
              //  break;
        case "Frijol":
           // resultado = "Es de Yess";
            //    break;
        case "Paco":
            resultado = "Es de Yess";
                break;
        case "Milo":
            resultado = "Es de Carlos";
                break;
        case "Cuchara":
            resultado = "Es de Ricardo";
                break;
        default:
            resultado ="No se sabe de quién es";
    }
    return resultado;
}
console.log( evaluarNombre("Lua") ); // Es de Abril

const nombreMascota = ""


/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 * 
 * 
 *Realizar dos versiones con switch y otra con if- else
 */

const velocidadVentiladorIfElse = velocidad => { 
    let mensaje;
    if (velocidad === 0) mensaje = "Apagado";
        else if (velocidad === 1 ) mensaje = "Baja";
            else if (velocidad === 2 ) mensaje = "Media";
                else if (velocidad === 3 ) mensaje = "Alta";
                    else mensaje="Velocidad desconocida";
return mensaje;
}

console.log(velocidadVentiladorIfElse(1));

const velocidadVentiladorSwitch = ( velocidad ) => {
    let mensaje;
    switch (velocidad){
        case 0:
            mensaje = "Apagado";
                break;
        case 1:
            mensaje = "Bajo";
                break;
        case 2:
            mensaje = "Media";
                break;
        case 3:
            mensaje = "Alta";
                break;
        default:
            mensaje = "Velocidad desconocida";
    }
    return mensaje;
}

console.log(velocidadVentiladorSwitch(5));

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/

const verficarPagoDeTarjeta = ( estaPagado ) =>{
    let msj;
    if( estaPagado) {
        msj = "La tarjta ha sido pagada";
    } else {
        msj = "La tarjeta no ha sido pagada";
    }
    return msj;
}
console.log( verficarPagoDeTarjeta( true ) );
console.log( verficarPagoDeTarjeta( false ) );

// verificar pago de tarjeta usando ternario

const verificarPagoTernario = (estaPagado2) => {return estaPagado2 ? "La tarjeta ha sido pagada" : "La tarjeta no ha sido pagada";
}

console.log(verificarPagoTernario(true));
console.log(verificarPagoTernario(false));

/*
Dado un numero entero, imprimir;
"Negativo": si el numero es menor a O.
"Cero": si el numero es 0.
"Positivo": si el numero es mayor a cero pero menor a 100
"Grande": si el numero es mayor o igal a 100.

-Realizar una funcion que reciba el numero y retorne el mansaje. 
-El retorno debe de ser impreso en la consola
-Realizar una version if-else, switch y operador ternario. 

*/

const verificadorNumeroIfElse = numero => { 
    let mensaje;
    if (numero < 0) mensaje = "Negativo";
        else if (numero === 0 ) mensaje = "Cero";
            else if (numero > 0 && numero < 100 ) mensaje = "Positivo";
                else if (numero >= 100 ) mensaje = "Grande";
                    else mensaje="Numero desconocido";
return mensaje;
}

console.log(verificadorNumeroIfElse(-5));
console.log(verificadorNumeroIfElse(120));
console.log(verificadorNumeroIfElse(55));


// Este codigo es incorrecto, el case no se puede usar asi. 
const verificadorNumeroSwitch = (numero) => {
    let mensaje;
    switch (true){ // con esto funciona la variable swich
        case numero<0:
            mensaje = "Negativo";
                break;
        case numero === 0:
            mensaje = "Cero";
                break;
        case numero > 0 && numero<100:
            mensaje = "Positivo";
                break;
        case numero > 100:
            mensaje = "Grande";
                break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
}

console.log(verificadorNumeroSwitch(-5));
console.log(verificadorNumeroSwitch(120));
console.log(verificadorNumeroSwitch(55));



const verificadorNumeroTernario = (numero) => {
    return numero<0 ? "Negativo":
      numero === 0 ? "Cero": 
        numero>0 && numero <100 ? "Positivo" : 
        "Grande"}


console.log(verificadorNumeroTernario(-5));
console.log(verificadorNumeroTernario(120));
console.log(verificadorNumeroTernario(55));


/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */

const verificarEdadTernario = (edad) => {
    return edad>=18 ? "Eres mayor de Edad" : "Eres menor de Edad";
}

console.log(verificarEdadTernario(25));
console.log(verificarEdadTernario(15));


// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


