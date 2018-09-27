'use strict';

//  Rellamadas

function rePar ( n1 ) {
    console.log(n1);
    if ( n1 === 0) console.log('Es par')
    else console.log( 'Es impar ');
}

function reDividir ( n1 ) {
    console.log(n1);
    par(n1, rePar);

}

function reCuadrado ( n1 ) {
    console.log(n1);
    dividir(n1, reDividir);
}

function reRestar (n1) {
    console.log(n1);
    cuadrado(n1, reCuadrado);
}

function reMultiplicar ( n1 ) {
    console.log(n1);
    restar(n1, 4,  reRestar);
}

function reLlamadaSuma ( resultado ) {
    console.log(resultado);
    multiplicar(resultado, reMultiplicar);
}



