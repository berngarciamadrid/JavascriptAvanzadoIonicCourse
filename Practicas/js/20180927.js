'use strict';

window.onload = init;

function init () {
    document.getElementById('boton1').onclick= sumaNumero;
    crearJSON();
}

function crearJSON() {
    var nombre = [];
    var apellido = [];
    var ciudad = [];
    var personas = [];

    nombre[0] = "Paco";
    nombre[1] = "Juan";
    nombre[2] = "María";

    apellido[0] = "Jiménez";
    apellido[1] = "García";
    apellido[2] = "López";

    ciudad[0] = "Madrid";
    ciudad[1] = "Toledo";
    ciudad[2] = "Guadalajara";

    for( let i= 0 ; i <nombre.length; i++) {
        personas.push({
            'nombre': nombre[i],
            'apellido': apellido[i],
            'ciudad': ciudad[i]

        });
        console.log(personas);
        console.log(JSON.stringify(personas));
    }


    var objeto = {};
    objeto.personas = personas;
    console.log(JSON.stringify(objeto));

    for (let i= 0; i <nombre.length; i++ ) {
        console.log ( `La persona se llama ${personas[i].nombre}`);

    }



    let stringify = JSON.stringify(personas);
    let parseado = JSON.parse(stringify);
    console.log(parseado);

    for ( let i = 0; i<nombre.length; i++) {
        $('#tablaJSON').append(`<tr><td>${parseado[i].nombre}</td>
        <td>${parseado[i].apellido}</td>
        <td>${parseado[i].ciudad}</td></tr>`)
    }
  
}

function sumaNumero() {
    try{
    var n1 = parseInt(document.getElementById('numero1').value);
    var n2 = parseInt(document.getElementById('numero2').value);

    var resultado = n1 + n2;

    if(isNaN(n1) || isNaN(n2) ) {
        throw `${n1} y/o ${n2} no son números`;
    }

    document.getElementById('resultado').innerHTML = resultado;
    }
    catch{
        document.getElementById('resultado').innerHTML = `${n1} y/o ${n2} no son números`; 
    }

    console.log(` Hola2 `)
}
/*
sumar(2,1 , function (resultado ){
    console.log(resultado);
    multiplicar( resultado, function (multiplicación){
        console.log(multiplicación);
        restar( multiplicación, 4, function ( resta ){
            console.log(resta);
            cuadrado(resta, function(elevado){
                console.log(elevado);
                dividir(elevado, function(divide) {
                    console.log(divide);
                    par(divide, function(n1) {
                        if(n1 == 0) {
                            console.log('es par');
                        } else {
                            console.log('es impar')
                        }
                    })
                });
            });
        });
    });
});
*/
 
sumar(2,1, reLlamadaSuma);

// Funciones
function sumar ( n1, n2, llamada1 ) {
    let sumar = n1 + n2;
    llamada1 (sumar); // Aquí llama a la función
}

function restar ( n1, n2, llamada3) {
    let restar = n1 - n2;
    llamada3(restar); // Llama a la función resta

}

function multiplicar ( resultado, llamada2 ) {
llamada2(resultado * resultado );
}

function cuadrado ( n1, llamada4 ) {
var cuadrado = n1 * n1;
llamada4(cuadrado);
}

function dividir(n1, llamada5) {
llamada5(parseInt(n1/3));
}

function par(divide, llamada6) {
llamada6(divide%2)
}



