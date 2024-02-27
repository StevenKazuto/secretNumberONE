//Desafíos
/*Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica = [];
/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los 
siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguagesDeProgramacion);
/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
console.log(lenguagesDeProgramacion);
/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/
function mostrarLista() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log("de la lizta:" + lenguagesDeProgramacion[i]);
  }
}
mostrarLista();

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/
function mostrarListaInversa() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(`${lenguagesDeProgramacion[i]}: de la lista`);
  }
}

mostrarListaInversa();
/*Crea una función que calcule el promedio de los elementos en una lista de números.*/

function mostrarPromedioLista() {
  let suma = 0;
  let listaNumeros = [10, 20, 30, 40, 50];
  let promedio = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    suma += listaNumeros[i];
    console.log(suma);
    promedio = suma / listaNumeros.length;
  }
  console.log("promedio del listado: " + promedio);
}
mostrarPromedioLista();

/*function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log("Média:", media);
*/

/*Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/
let listamayormenor = [1, -1, 5, 7, 9, 10, 12, 15, 20, 30, 50, 80, 100];
let menor = listamayormenor[0];
let mayor = listamayormenor[0];
function mayorMenor() {
  for (let i = 0; i < listamayormenor.length; i++) {
    if (listamayormenor[i] < menor) {
      menor = listamayormenor[i];
    }
    if (listamayormenor[i] > mayor) {
      mayor = listamayormenor[i];
    }
  }
  console.log("menor de lista: " + menor);
  console.log("mayor de lista: " + mayor);
}

mayorMenor(listamayormenor);

/*Crea una función que devuelva la suma de todos los elementos en una lista.*/
function mostrarsumaLista() {
  let suma1 = 0;
  let listaNumeros1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let promedio = 0;
  for (let i = 0; i < listaNumeros1.length; i++) {
    suma1 += listaNumeros1[i];
    console.log(suma1);
  }
  console.log("suma del listado: " + suma1);
}
mostrarsumaLista();

/*Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.*/
let listaNumeros2 = [1, 2, 3, 4, 6, 7, 8, 9];
function encontrarElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
console.log("encontrado? posicion:" + encontrarElemento(listaNumeros2, 5));
console.log("encontrado? posicion:" + encontrarElemento(listaNumeros2, 8));
/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.*/

/*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/
