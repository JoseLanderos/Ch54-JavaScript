console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions


----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

saludar("Jen");

function saludar(nombre){
console.log("Que te gustaria de regalo de cumpleanos "+ nombre)
}




/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function (nombre,regalo){
console.log(`Felicidades ${nombre} te trage ${regalo}`)
};

darRegalo("Jen", "Sopa Nisin con camaron");


/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

//sumaDosNumerosDec(5,5);
//restaDosNumerosDec(10,5);
//sumaDosNumerosExp(5,5);
//restaDosNumerosExp(10,5);

function sumaDosNumerosDec(num1, num2){
return (num1+num2);
}

function restaDosNumerosDec(num1,num2){
return (num1-num2);
}

const sumaDosNumerosExp = function (num1,num2){
  return (num1+num2);
};

const restaDosNumerosExp = function (num1,num2){
  return (num1-num2);
}

console.log(sumaDosNumerosDec(5,5));
console.log(restaDosNumerosDec(10,5));
console.log(sumaDosNumerosExp(5,5));
console.log(restaDosNumerosExp(10,5));

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp(){
  console.log("Configuracion inicial de la aplicacion");
})();
//setUp();


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule al área de un triángulo
// al función debe retornar el resultado

function areaTrianguloDec(base,altura){
  return base*altura/2;
}
console.log(`Resultado suando funcion Declarada ${areaTrianguloDec(5,5)}.`);

const areaTrianguloExp = function (base,altura){
  return base*altura/2;
}
console.log(`Resultado usando funcion Exponencial ${areaTrianguloExp(5,5)}.`);

const areaTrianguloFlecha = (base,altura) => base*altura/2;  

console.log(`Resultado usando funcion Flecha ${areaTrianguloFlecha(5,5)}.`);


// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(areaTrianguloFlecha(base, altura));
imprimirArea(12, 20);

// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

/* const areaCirculo = radio => Math.PI * radio ** 2; 

const imprmirArea = radio =>document.getElementById("area-circulo").innerText = areaCirculo(radio); 

imprimirArea(5); */

const circleArea = (radio) => Math.PI * radio ** 2;
const imprimirAreaCirculo = (radio) =>
  document.getElementById("area-Circulo").innerText = circleArea(radio);
imprimirAreaCirculo(5);
 
/* innerText se usa para aplicar estilos */

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const saludarPersona = (nombre="persona invitada") => console.log(`Hola ${nombre}, ya nos vamos a descansar`);

saludarPersona();
saludarPersona("Jose");

console.log(parseInt("5")); // 5 base 10
console.log(parseInt("1000"));// 1000 base 10
console.log(parseInt("1000",2)); // 8 base 10
console.log(parseInt("D2042D")); // NaN base 10
console.log(parseInt("D2042D",16)); // 13763629


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

const imprimirMensaje = (fncCallBack) => fncCallBack("Hola Ch54");
                                         //18("Hola Ch54")
                                         //"Patito"("Hola Ch54")
                                         // console.log("Hola Ch54")
                                         // console.log()("Hola Ch54")
                                         // enviarParrafo("Hola Ch54")

//imprimirMensaje(18); //fncCallBack is not a function
//imprimirMensaje("Patito"); //fncCallBack is not a function
imprimirMensaje(console.log); //lo paso como una funcion no como un numero ni string
//imprimirMensaje(console.log()); //fncCallBack is not a function

const enviarParrafo = (mensaje) => { 
  const saluda = "Hola, buen dia";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`;
};

imprimirMensaje (enviarParrafo);

// usando la funcion imprimirMensaje enviar un callback para que imprima con alert. 

//const alerta = (mensaje) => alert(mensaje);

//imprimirMensaje(alerta);

//imprimirMensaje(alert);

/*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/


/* const sumarEImprimir = (a, b) => {
  const resultado = sumarDosNumeros(a,b);
  const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
  //console.log(mensaje);
  document.getElementById("resultado-sumatoria").innerText = mensaje;
}
sumarEImprimir(10,14);
  */


/* 
const sumarDosNumeros = (a, b) => a+b;

const sumarEImprimir = ( a, b , imprimir = console.log) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
}
sumarEImprimir( 10, 14); // se imprimr en consola 
const imprimirEnDOMParagraph = (mensaje) =>{
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje;
}
const imprimirEnDOMH2 = (mensaje) =>{
  const refParagraph = document.getElementById("resultado-sumatoriah2");
  refParagraph.innerText = mensaje;
}
sumarEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph
sumarEImprimir( 10, 14, imprimirEnDOMH2); // se imprime en h2 
// */


// Recursivas

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120

// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
    console.log(`Resolviendo el factorial de ${numero}`);
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    console.log(`El factorial de ${numero} es ${result}`);
    return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120

/*
    parámetro   recursividad(n-1)   returnFnc
     5              5-1 = 4            120
     4              4-1 = 3            24
     3              3-1 = 2            6       
     2              2-1 = 1            2         
     1               ----              1
*/

/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/

function saludoConRecursividad( numeroSaludos){
  if(numeroSaludos <= 0) return numeroSaludos;
  const result = saludoConRecursividad(numeroSaludos - 1 ) ;
  console.log(`Saludo ${numeroSaludos}`);
}
saludoConRecursividad(10)