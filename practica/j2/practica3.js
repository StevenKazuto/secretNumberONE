//Desafíos parte3                                                                                                                           :
//1- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos,
//que se recibirán como parámetros.

let peso = parseInt(prompt("digite zu pezo"));
let alturaPerzona = parseFloat(prompt("digite zu altura"));

function calculoIMC(peso, altura) {
  var imc = peso / (altura * altura);

  return imc;
}
let imc = calculoIMC(peso, alturaPerzona);
alert(`zu IMC está en ${imc.toString()}`);

//2- Crea una función que calcule el valor del factorial de un número pasado como parámetro.

let factorialNumero = parseInt(prompt("Digite un numero"));

function calcularFactorial(numero) {
  let rezultado = 1;
  for (var i = 1; i <= numero; i++) {
    console.log(i);
    rezultado *= i;
  }
  return rezultado;
}
let rezultado = calcularFactorial(factorialNumero);
alert(`el factorial ez ${rezultado.toString()}`);

//otra manera de hacerlo con la funcion haciendo la funcion del for

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//3- Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolarBrazil(dolarez) {
  var cuotaCambio = 5;
  var realezB = dolarez * cuotaCambio;
  return realezB;
}

let dolarAreal = convertirDolarBrazil(prompt("digite # dolarez a convertir"));
alert(dolarAreal);

//otra manera de::
function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.8;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

//4-Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
//utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaPerimetroRectangulo(altura, anchura) {
  let perimetro = 2 * (altura + anchura);
  let area = altura * anchura;

  alert(`El perimetro es: ${perimetro} y el area es: ${area} `);
}
let alturaRectangulo = prompt("Digite la altura");
let anchura = prompt("Digite la anchura");
areaPerimetroRectangulo(alturaRectangulo, anchura);

//5-Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaPerimetroCircular(radio) {
  let area = radio * radio * Math.PI;

  alert(`El area es: ${area} `);
}
let radio = prompt("Digite el Radio");
areaPerimetroCircular(radio);

//6-Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numerotabla) {
  for (var i = 1; i <= 10; i++) {
    console.log(`${numerotabla} x ${i} = ${numerotabla * i}`);
    alert(`${numerotabla} x ${i} = ${numerotabla * i}`);
  }
}
let numerotabla = prompt("digite el numero a realizar zu tabla de multiplicar");
tablaMultiplicar(numerotabla);
