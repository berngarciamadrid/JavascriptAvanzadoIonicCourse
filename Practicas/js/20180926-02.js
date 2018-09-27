'use strict'

$(document).ready(init);

function init ( ) {
    // In an HTML document, .html() can be used to get the contents of any element. 
    //If the selector expression matches more than one element, 
    // only the first match will have its HTML content returned
    // $('#contenedor p').html('<h2>Prueba de JQuery</h2>'); //Tipo innerHTML

    /*
    Unlike the .html() method, .text() can be used in both XML and HTML documents. 
    The result of the .text() method is a string containing the combined text of all matched elements. 
    (Due to variations in the HTML parsers in different browsers, 
        the text returned may vary in newlines and other white space.) 
    */
    // $('#contenedor p').text('<h2>Prueba de JQuery</h2>'); 
    // $('.contenedor ').append('<p>Prueba de JQuery</p>');
    // $('.contenedor ').prepend('<p>Prueba de JQuery</p>');
    //$('.contenedor ').before('<p>Prueba de JQuery</p>');
    // $('.contenedor ').after('<p>Prueba de JQuery</p>');
    // $('.contenedor p ').remove();
    // $('.contenedor p ').replaceWith('<p>Prueba de JQuery</p>');
    // $('.contenedor p ').css({'color' : 'red', 'font-size': '100px' });
    /*$( "#boton1" ).fadeToggle( "slow", function() {
        $( ".contenedor" ).append( "<div>Terminado</div>" );
      });
      */

      // $('.contenedor').fadeIn();
      // $('.contenedor').fadeOut();
      /* $( 'boton1' ).click(function() {
        $('.contenedor p').hide( "slow" );
      });
      */
     $( "#boton2" ).click(function() {
        $( "#cambiar p" ).toggle();
      });

      $('.contenedor p ').replaceWith('<p>Prueba de JQuery</p>');
      $('.contenedor p ').css({'color' : 'red', 'font-size': '100px' });

      anadoClass();

}

mostrar();
ocultar();

function anadoClass() {
    $("#textoNuevo").addClass(" myClass yourClass");
}

function mostrar() {
    $('div h2').fadeIn(5000);
    setTimeout(ocultar, 5000);
}

function ocultar() {
  $('div h2').fadeOut(5000);
  setTimeout(mostrar, 5000);
}