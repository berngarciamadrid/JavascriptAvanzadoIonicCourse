/* use strict */

// Crear un objeto //
var persona = {
    nombre: "Juan",
    apellidos: "Gómez",
    telefono: 654735321,
    email: "correo@servidor.com",
    anonacimiento: 1974,
    edad: function() {
        return (2018 - persona.anonacimiento);
    }
};

// Introducir los datos del objeto en una tabla
document.getElementById("demo19").innerHTML = persona.nombre;
document.getElementById("demo20").innerHTML = persona.apellidos;
document.getElementById("demo21").innerHTML = persona.telefono;
document.getElementById("demo22").innerHTML = persona.email;
document.getElementById("demo23").innerHTML = persona.anonacimiento;
document.getElementById("demo24").innerHTML = persona.edad();

// Funciones de modificación de una frase introducida

function iniciar() {
    let palabra = document.getElementById("frase").value;
    document.getElementById("resultadoFrase").innerHTML = "<p>" + palabra + "</p>";
}

function reemplazar() {
    let palabra = document.getElementById("frase").value;
    let palabra_comillas = "\'" + palabra + "\'";
    document.getElementById("resultadoFrase").innerHTML = "<p>" + palabra_comillas + "</p>";
}

function mayusculas() {
    let palabra = document.getElementById("frase").value;
    let mayusculas = palabra.toUpperCase();
    document.getElementById("resultadoFrase").innerHTML = "<p>" + mayusculas + "</p>";
}

function minusculas() {
    let palabra = document.getElementById("frase").value;
    let minusculas = palabra.toLowerCase();
    document.getElementById("resultadoFrase").innerHTML = "<p>" + minusculas + "</p>";
}

function concatenar() {
    let palabra = document.getElementById("frase").value;
    let cita = "Cita: "
    let concatenacion = cita.concat(palabra);
    document.getElementById("resultadoFrase").innerHTML = "<p>" + concatenacion + "</p>";
}

// Primera palabra de una frase y última palabra de una frase
function mostrarPrimeraPalabra() {
    let palabra = document.getElementById("contarvocales3").value;
    let buscarEspacio = palabra.indexOf(" ");
    palabra = palabra.slice(0, buscarEspacio);
    document.getElementById("resultadoPalabra").innerHTML = palabra;

}

function mostrarUltimaPalabra() {
    let palabra = document.getElementById("contarvocales3").value;
    let buscarEspacio = palabra.lastIndexOf(" ");
    let longitud = palabra.length;
    palabra = palabra.substring(longitud, buscarEspacio);
    palabra = palabra.trim();
    document.getElementById("resultadoPalabra").innerHTML = palabra;

}

// Crear función que muestre el número de caracteres que tiene una frase introducida.
function contarCaracteres() {
    let palabra = document.getElementById("contarvocales2").value;
    let longitud = palabra.length;
    document.getElementById("resultadoContarCaracteres").innerHTML = `<p>La frase tiene ${longitud} caracteres</p>`;
}

// Crear función que sustituya los espacios en blanco por guiones de una frase introducida
function sustituirEspacios() {
    let palabra = document.getElementById("contarvocales6").value;
    palabra = palabra.replace(/\s/g, "-");
    document.getElementById("resultadoSustituirEspacios").innerHTML = `<p> ${palabra} </p>`;
}

// Crear una función que muestre un texto introducido al revés
// https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
function mostrarAlReves() {
    let palabra = document.getElementById("contarvocales7").value;
    palabra = palabra.split(""); // Convertimos en un array de letras y espacios la frase
    palabra = palabra.reverse(""); // Le damos la vuelta al array
    palabra = palabra.join(""); // Lo juntamos 
    console.log(palabra);
    document.getElementById("resultadoMostrarAlReves").innerHTML = `<p> ${palabra} </p>`;
}

// Crear una función que muestre  un número introducido:
// en un número entero, con 1 decimal, con 2 decimales y con el símbolo del Euro.
function convertirEntero() {
    let numero = parseInt(document.getElementById("contarvocales8").value);
    numero = numero.toPrecision(1);
    document.getElementById("resultadoConvertirNumero").innerHTML = numero;
}

function convertirUnDecimal() {
    let numero = parseInt(document.getElementById("contarvocales8").value);
    numero = numero.toFixed(2);
    document.getElementById("resultadoConvertirNumero").innerHTML = numero;
}

function convertirDosDecimal() {
    let numero = parseInt(document.getElementById("contarvocales8").value);
    numero = numero.toFixed(3);
    document.getElementById("resultadoConvertirNumero").innerHTML = numero;

}

// Crear una función que  cuente el número de vocales  que tiene un texto.
function contarVocales() {
    let vocales = document.getElementById("contarvocales").value;
    let pattern1 = /[aeiou]/g;
    vocales = vocales.match(pattern1);
    let longitud = vocales.length;
    document.getElementById("resultadoContarVocales").innerHTML = longitud + " vocales ";

}

// Crear una función que  cuente el número de consonantes que tiene un texto.
function contarConsonantes() {
    let consonantes = document.getElementById("contarvocales4").value;
    let pattern1 = /[bcdfghjklmnñpqrstvwxyz]/g;
    consonantes = consonantes.match(pattern1);
    let longitud = consonantes.length;
    document.getElementById("resultadoContarConsonantes").innerHTML = longitud + " consonantes ";
}

// Crear una función que  cuente el número de veces que aparece cada letra.
function contarVeces() {
    let palabra = document.getElementById("contarvocales5").value;
    palabra = palabra.split("");
    console.log(palabra);

}