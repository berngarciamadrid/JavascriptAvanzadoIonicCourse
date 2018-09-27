/*
$(document).ready(function() {
    // alert( 'cargo función anónima ');
    $('body').hide().fadeIn('5000');
});
*/

// Ocultar con Javascript Puro / Vanilla Javascript
// window.onload = init;

/* function init() {
    var oculto = document.querySelectorAll('#contenedor p');
    for ( let i= 0; i<oculto.length ; i++){
        oculto[i].style.display = "none";
    }
} */
$(document).ready(function () {
    // $('#contenedor p').hide();
    $('#contenedor').width('500').height('600').css({"backgroundColor":"red"})
});