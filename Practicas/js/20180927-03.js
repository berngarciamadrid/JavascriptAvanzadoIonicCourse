'use strict';

let promise = new Promise( (resolve, reject) => {
    const valor = 5;
    if ( valor === 5) resolve ( console.log(`Éxito, se ejecutó ${valor} `));
    else reject (console.log(`Fracaso, falló ${valor} ${reject}`));
});

promise.then( function (resolve) {
    console.log(` Éxito2 `);
}, function (reject) {
    console.log ( ` Error de lectura `);
})