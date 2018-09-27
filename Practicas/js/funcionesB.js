// Variables y Funciones
                // Litros
                var litros = parseInt(prompt("Escriba en número los litros, para calcular los centilitros"));
                if ( litros > 1) {
                    document.getElementById("litros").innerHTML = litros + " litros";
                }else if( litros === 1) {
                    document.getElementById("litros").innerHTML = litros + " litro";
                }else if( litros === 0 | litros < 0 ){
                    var litros = parseInt(prompt("Escriba en número los litros, para calcular los centilitros"));
                }

                // Kilómetros
                var kilómetros = parseInt(prompt("Escriba en número los kilómetros, para calcular los metros"));
                if ( kilómetros > 1) {
                    document.getElementById("kilómetros").innerHTML = kilómetros + " kilómetros";
                }else if( kilómetros === 1) {
                    document.getElementById("kilómetros").innerHTML = kilómetros + " kilómetro";
                }else if( kilómetros === 0 | kilómetros < 0 ){
                    var kilómetros = parseInt(prompt("Escriba en número los kilómetros, para calcular los metros"));
                }

                // Horas
                var horas = parseInt(prompt("Escriba un número de horas para pasarlas a minutos"));
                if ( horas > 1) {
                    document.getElementById("horas").innerHTML = horas + " horas ";
                }else if( horas === 1) {
                    document.getElementById("horas").innerHTML = horas + " hora ";
                }else if( horas === 0 | horas < 0 ){
                    var horas = parseInt(prompt("Escriba un número de horas para pasarlas a minutos"));
                }

                // Megabytes
                var megabytes = parseInt(prompt("Escriba un número de megabytes para pasarlas a gigabytes"));
                if ( megabytes > 1) {
                    document.getElementById("megabytes").innerHTML = megabytes + " megabytes ";
                }else if( megabytes === 1) {
                    document.getElementById("megabytes").innerHTML = megabytes + " megabyte ";
                }else if( megabytes === 0 | megabytes < 0 ){
                    var megabytes = parseInt(prompt("Escriba un número de megabytes para pasarlas a gigabytes"));
                }

                // Pulgadas
                var pulgadas = parseInt(prompt("Escriba un número de pulgadas para pasarlas a centímetros"));
                if ( pulgadas > 1) {
                    document.getElementById("pulgadas").innerHTML = pulgadas + " pulgadas ";
                }else if( pulgadas === 1) {
                    document.getElementById("pulgadas").innerHTML = pulgadas + " pulgada ";
                }else if( pulgadas === 0 | pulgadas < 0 ){
                    var pulgadas = parseInt(prompt("Escriba un número de pulgadas para pasarlas a centímetros"));
                }

                // Días
                var dias = parseInt(prompt("Escriba en número los días para pasarlos a minutos y segundos"));
                if ( dias > 1) {
                    document.getElementById("dia").innerHTML = dias + " días son ";
                }else if( dias === 1) {
                    document.getElementById("dia").innerHTML = dias + " día son ";
                }else if( dias === 0 | dias < 0 ){
                    var dias = parseInt(prompt("Escriba en número los días para pasarlos a minutos y segundos"));
                }

                // Cálculo del IVA:
                var euroIVA = parseInt(prompt("Escriba el número de euros para calcular el IVA"));
                if ( euroIVA > 1) {
                    document.getElementById("euroIVA").innerHTML = euroIVA;
                }else if( euroIVA === 1) {
                    document.getElementById("euroIVA").innerHTML = euroIVA;
                }else if( euroIVA === 0 | euroIVA < 0 ){
                    var euroIVA = parseInt(prompt("Escriba el número de euros para calcular el IVA"));
                }
                var calcularIva = (euroIVA - (euroIVA * 20 / 100));
                var calcularIva2 = (calcularIva * 21 /100);
                var resultadoIva = calcularIva + calcularIva2;

                // Año actual, año anterior y año siguiente
                var yearactual = 2018;

                // Anyo
                var anyo = 1;
                var anyo_dias = 365;
                var anyo_semanas = 52;
                var anyo_trimestres = 4;

                // Recorrido de un coche
                var velocidad = 120;
                var recorrido = 375;
                var tiempo = recorrido/velocidad;
                var tiempo_minutos = tiempo * 60;

                var calculo_YEAR= " El año anterior fue: " + (yearactual - 1 )+ " y el año siguiente será: " + (yearactual + 1);
                var calculo_ANYO= " tiene " + anyo_dias + " dias , " + anyo_semanas + " semanas y " + anyo_trimestres + " trimestres";
