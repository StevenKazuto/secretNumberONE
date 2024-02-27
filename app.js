let numeroSecreto = 0;
let intentos = 0;
let intentosZorteadoz = 0;
let listaNumerosZorteados = [];
let maximoNumero = 10;

function azignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('numDeUsuario:' + numeroDeUsuario + " " + typeof numeroDeUsuario);
    console.log('numero secreto: ' + numeroSecreto + " " + typeof numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);

    console.log(intentos + "intentos: ");
    if (numeroDeUsuario === numeroSecreto) {
        azignarTextoElemento('p', `ACERTASTE el numero Secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            azignarTextoElemento('p', 'El numero Secreto es menor');
        } else {
            azignarTextoElemento('p', 'El numero Secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}


function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = '';
}
function generarNumeroSecreto() {
    /*let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
    */
    console.log(listaNumerosZorteados);
    let numeroGenerado = Math.floor(Math.random() * maximoNumero) + 1; //otra forma de retornar el numero secreto
    //zi ya zorteamoz todoz loz numeroz
    if (listaNumerosZorteados.length == maximoNumero) {
        azignarTextoElemento("p", "Numero maximo de numeros distintos generados");
    } else {
        //zi el numero generado ezta incluido en la lizta
        if (listaNumerosZorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else {
            listaNumerosZorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function reiniciarJuego() {
    //contador  #intentoz
    intentosZorteadoz++;
    console.log(intentosZorteadoz);
    //limpiamos los valores anteriores de loz numeroz generadoz
    if (intentosZorteadoz > (maximoNumero / 2)) {
        listaNumerosZorteados = [];
        intentosZorteadoz = 0;
        limpiarCaja();
        condicionezInicialez();
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    } else {
        //limpiar caja
        limpiarCaja();
        //menzaje de inicio de numeroz
        //generar numero aleatorio
        //reiniciar #intentoz
        condicionezInicialez();
        //dezhabilitar boton nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //elige atributo
        //document.getElementById('reiniciar').removeAttribute('disabled'); diferente manera de hacerlo con id en vez de atributo
    }
}

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto'

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';
function condicionezInicialez() {
    azignarTextoElemento('h1', 'juego del numero secreto actualizado');
    azignarTextoElemento('p', `Indica un numero del 1 al ${maximoNumero}`);
    numeroSecreto = generarNumeroSecreto();
    console.log('numero secreto: ' + numeroSecreto);
    intentos = 1;

}

condicionezInicialez();