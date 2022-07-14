// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'sergio';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  console.log(str);
  return str;
  
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  var suma = x + y;
  return suma;
}
suma(2, 3);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  var diferencia = x - y;
  return diferencia;
}
resta(5, 3);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  var multiplica = x * y;
  return multiplica;
}
multiplica(2, 3);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  var divide = x / y;
  return divide;
}
divide(6, 3);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
    if(x ===  y ){
        return (true);
      }else { 
        return (false);
      }
    }sonIguales(1, 2);
 
    function tienenMismaLongitud(str1, str2) {
      // Devuelve "true" si las dos strings tienen la misma longitud
      // De lo contrario, devuelve "false"
         if(str1.length === str2.length){
            return (true);
        }else{
            return (false);
        }
    }
    tienenMismaLongitud("cocina", "refrigerador");

    function menosQueNoventa(num) {
      // Devuelve "true" si el argumento de la función "num" es menor que noventa
      // De lo contrario, devuelve "false"
        if(num < 90){
            return (true);
        }else{
            return (false);
        }
    }
    menosQueNoventa(190);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  if(num > 50){
    return (true);
}else{
    return (false);
}
  
}
mayorQueCincuenta(60);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  return x % y;
}
obtenerResto(10, 3);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  if(num % 2 === 0){
      return (true);
  }else{
      return (false);
  }
}
esPar(7);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  if(num % 2 === 1){
      return (true);
  }else{
      return (false);
  }
}
esImpar(7);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  return Math.pow(num, 2);
}elevarAlCuadrado(5);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  return Math.pow(num, 3);
}
elevarAlCubo(3);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  return Math.pow(num, exponent);
}
elevar(2, 3);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  return Math.round(num);  
}
redondearNumero(6,5);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  return Math.ceil(num);  
}
redondearHaciaArriba(6,1);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}
numeroRandom();

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
  if(numero > 0){
      return "Es positivo";
  }else if(numero < 0){
    return "Es negativo";
  }else{
      return (false);
  }
}
esPositivo(4);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  return (str) + "!";
}
agregarSimboloExclamacion("hello world");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  var separados = nombre + ' ' + apellido;
    return (separados);
}
combinarNombres("Soy", "Henry");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
 return "Hola" + ' ' + nombre + "!";
} 
obtenerSaludo("Martin");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  var area = alto * ancho;
  return (area);
}
obtenerAreaRectangulo(0, 2);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
 var perimetro = lado * 4;
  return (perimetro);
}
retornarPerimetro(4);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  var areaTriangulo = (base *  altura) /2;
    return (areaTriangulo);
}
areaDelTriangulo(20, 10);


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  var dolar = euro * 1.20;
  return (dolar);
}
deEuroAdolar(1);

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  if(letra.length > 1){
    return "Dato incorrecto"
  }
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }
  return "Dato incorrecto"

}
esVocal("b");



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
