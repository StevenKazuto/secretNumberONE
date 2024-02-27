


//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function mConsola (){
    console.log("El boton fue clicado");
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
//Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function ciudadBrasil (){
let ciudad = prompt(alert("Diga una ciudad de Brasil"));
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}


//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function amorJz(){
    alert("Yo amo JS");
}


//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function zumaDozNumeroz(){
let num1 = parseInt(prompt(alert("DIgite el primer numero")));
let num2 = parseInt(prompt(alert("DIgite el zegundo numero")));
let rezultado = num1 + num2;
alert(`${num1} + ${num2} = ${rezultado}`);

}