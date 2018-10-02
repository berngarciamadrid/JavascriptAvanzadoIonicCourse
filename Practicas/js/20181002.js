'use strict';

window.onload = datos;


var url = 'https://mindicador.cl/api/dolar';

function datos () {
    document.getElementById('acceso').onclick = traeDatos;
}

function traeDatos() {
    fetch(url)
    .then( (data) => { return data.json()})
    .then( data => { console.log(data)
    });
}