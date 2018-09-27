'use strict';

// Cuando se carga la página //
// $(document).ready(init);
// 3 maneras de ver que el documento está cargado
/*$(document).ready(function() {

});
$(document).on('load', function() {

})
*/

window.onload= init;

function init() {
    let boton1 = document.getElementById('boton1');

    boton1.style.width = "300px";
    boton1.style.height = "50px";
    boton1.style.background= "red";
    boton1.style.color = "white";
    boton1.style.marginLeft = "40%";
    boton1.style.marginTop = "100px";
    boton1.focus();

    boton1.onclick = muestraFecha();


}

class Películas {
    constructor( idBBDD, titulo, tematica ) {
        this.idBBDD = idBBDD;
        this.titulo = titulo.toUpperCase();
        this.tematica = tematica.toUpperCase();

    }

    reproducir () {
        return 'reproduciendo película ' + this.titulo;

    }

    setTime( tiempo ) {
        return  ` Has fijado un tiempo de ${tiempo} para la película  ${this.titulo}`;
    }
}

class Series extends Películas {
    constructor (idBBDD, titulo, tematica, capitulo) {
        super(idBBDD, titulo, tematica);  // Heredas los argumentos  de la Clase Padre
        this.capitulo = capitulo;
    }

    reproducirSerie() {
        return ` estás reproduciendo la serie ${this.titulo}`; 
    }
}

var pelicula1 = new Películas (1, 'Bourne', 'ficción');
var pelicula2 = new Películas (2, 'Monstruos S.A.', 'dibujos');
var serie1 = new Series (1, 'La casa de papel', 'ficción');
var serie2 = new Series (2, 'La que se avecina','humor', 150);

console.log(pelicula1.reproducir());
console.log(pelicula2.setTime(120));
console.log(serie1.reproducirSerie());

function muestraFecha(){

    var fecha = new Date();
    alert( ' La fecha actual es :' + fecha);

} 

var dimeOperacion = (prompt("Dime que operación quieres")).toLowerCase();


operacion (dimeOperacion);

function operacion ( operacion ) {

    var dato1 = parseInt(prompt("Primer número, en números"));
    var dato2 = parseInt(prompt("Segundo número, en números"));
    var resultado;
    var mostrarResultado = document.getElementById('resultadoOperacion');

   switch(operacion){
       case "suma":
       resultado = suma(dato1, dato2);
       console.log(resultado);
       mostrarResultado.innerHTML = `El resultado de la operación es : ${resultado}`;
       break;
       case "resta":
       resultado = resta(dato1, dato2);
       console.log(resultado);
       mostrarResultado.innerHTML = `El resultado de la operación es : ${resultado}`;
       break;
       case "multiplicacion":
       resultado = multiplicacion(dato1, dato2);
       console.log(resultado);
       mostrarResultado.innerHTML = `El resultado de la operación es : ${resultado}`;
       break;
       case "division":
       resultado = division(dato1, dato2);
       console.log(resultado);
       mostrarResultado.innerHTML = `El resultado de la operación es : ${resultado}`;
       break;
   }

}

//  Funciones de operaciones

function suma( n1, n2 ) {
    let suma = n1+ n2;
    return suma;
}

function resta( n1, n2 ) {
    let resta = n1 - n2;
    return resta;
}

function multiplicacion( n1, n2 ) {
    let multiplicacion = n1 * n2;
    return multiplicacion;
}

function division( n1, n2 ) {
    let division = n1+ n2;
    return division;
}

// Hacer la bonoloto
var generarBonoloto = document.getElementById('crearLoteria');
// Primeros 6 números
var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var numero3 = document.getElementById('numero3');
var numero4 = document.getElementById('numero4');
var numero5 = document.getElementById('numero5');
var numero6 = document.getElementById('numero6');
// Complementario y reintegro
var numero7 = document.getElementById('numero7');
var numero8 = document.getElementById('numero8');

function crearBonoloto () {
    /*
    numero1.innerHTML = Math.floor((Math.random() * 49) + 1);
    numero2.innerHTML = Math.floor((Math.random() * 49) + 1);
    numero3.innerHTML = Math.floor((Math.random() * 49) + 1);
    numero4.innerHTML = Math.floor((Math.random() * 49) + 1);
    numero5.innerHTML = Math.floor((Math.random() * 49) + 1);
    numero6.innerHTML = Math.floor((Math.random() * 49) + 1);
    numero7.innerHTML = Math.floor((Math.random() * 49) + 1);
    numero8.innerHTML = Math.floor((Math.random() * 9));
    */
    let num1 = Math.floor((Math.random() * 49) + 1);
    let num2 = Math.floor((Math.random() * 49) + 1);
    let num3 = Math.floor((Math.random() * 49) + 1);
    let num4 = Math.floor((Math.random() * 49) + 1);
    let num5 = Math.floor((Math.random() * 49) + 1);
    let num6 = Math.floor((Math.random() * 49) + 1);
    let num7 = Math.floor((Math.random() * 49) + 1);
    let num8 = Math.floor((Math.random() * 9));

    if( num2 == num1 | num2 == num3 | num2 == num4 | num2 == num5 | num2 == num6 | num2 == num7) {
        num2 = Math.floor((Math.random() * 49) + 1);
    } else if ( num3 == num4 | num3 == num5 | num3 == num6 | num3 == num7 | num3 == num2 | num3 == num1 ) {
        num3 = Math.floor((Math.random() * 49) + 1);
    } else if ( num4 == num5 | num4 == num6 | num4 == num7 | num4 == num1 | num4 == num2 |  num4 == num3 ) {
        num4 = Math.floor((Math.random() * 49) + 1);
    } else if ( num5 == num6 | num5 == num7 | num5 == num4 | num5 == num3 | num5 == num2 | num5 == num1) {
        num5 = Math.floor((Math.random() * 49) + 1);
    } else if ( num6 == num7 | num6 == num5 | num6 == num4 | num6 == num3 | num6 == num2 | num5 == num1) {
        num6 = Math.floor((Math.random() * 49) + 1);
    } else if ( num7 == num6 | num7 == num5 | num7 == num4 | num7 == num3 | num7 == num2 | num7 == num1) {
        num7 = Math.floor((Math.random() * 49) + 1);
    } 

    numero1.innerHTML = num1;
    numero2.innerHTML = num2;
    numero3.innerHTML = num3;
    numero4.innerHTML = num4;
    numero5.innerHTML = num5;
    numero6.innerHTML = num6;
    numero7.innerHTML = num7;
    numero8.innerHTML = num8;
}

/*
function generador() {
    var combinacion = [];
    var i = 0;
    var generado = false;
    do {
        var numeroAleatorio = parseInt(Math.random()*49) + 1;
        for ( i=0; i<=combinacion.length; i++) {
            if(combinacion[i].length == numeroAleatorio ) {
                generado = true;
                break;
            }
        }
        if ( generado == false ) {
            combinacion[combinacion.length] = numeroAleatorio;
        }
        generado = false;

    } while ( combinacion.length  < 6);
    document.getElementById('resultadoGanador').innerHTML = combinacion;
}
*/