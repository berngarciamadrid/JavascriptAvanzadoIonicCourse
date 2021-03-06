/* use strict */

/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_foreach */
/* Función para iterar un Array */
var elemento = " ";
/* Array de Categorías */
var categorias = [
    "Prebenjamínes 5, 6 y 7 años",
    "Benjamínes 8 y 9 años",
    "Alevines 10, 11 años",
    "Infantiles 12 y 13 años",
    "Cadetes 14 y 15 años",
    "Juveniles 16,17 y 18 años"
];
categorias.forEach(iterarArray);

function iterarArray(value, index, array) {
    elemento ="<p>" + elemento + value + "</p>"; 
}
document.getElementById("arrayCategorias").innerHTML = elemento;

/* Función Multiplicar */
function multiplicar() {
    var valor = document.getElementById("cantidad").value;
    var linea = "";
    for ( var i =0; i<=10; i++) {
        var resultado = valor * i;
        linea +="<tr>" + "<td>" + valor + "</td><td>" + " *  " + "</td><td>" + i + "</td><td>" + "= " + "<td>"+ resultado + "</td></tr>" ;
        
    }
    document.getElementById("resultadoMultiplicar").innerHTML = linea;
}

/* Función Par, Impar */
function parImpar() {
    var valor2= document.getElementById("parImpar").value;
    if ( valor2%2 ==0 ) {
        document.getElementById("tipoNumero").innerHTML = "El número es par";
    } else{
        document.getElementById("tipoNumero").innerHTML = "El número es impar";
    }
}

/* Función tipo Primo */
function primo() {
    var valor3 = document.getElementById("primo").value;
    for( var i=2 ; i<valor3; i++ ){
        if( valor3%i ==0 ) {
            document.getElementById("tipoPrimo").innerHTML = "El número " + valor3 +  " no es primo";
            break;
        } else{
            document.getElementById("tipoPrimo").innerHTML = "El número " + valor3 + " es primo";
        }
    }
}

/* Función comprobar Edad */
function edadCategoria() {
    var valor4 = document.getElementById("edadCategoria").value;
    switch(valor4) {
        case "5":
        case "6":
        case "7":
        document.getElementById("comprobarCategoria").innerHTML =  "Prebenjamínes 5,6,7 años";
        break;
        case "8":
        case "9":
        document.getElementById("comprobarCategoria").innerHTML = "Benjamínes 8 y 9 años";
        break;
        case "10":
        case "11":
        document.getElementById("comprobarCategoria").innerHTML = "Alevines 10 y 11 años";
        break;
        case "12":
        case "13":
        document.getElementById("comprobarCategoria").innerHTML = "Infantiles 12 y 13 años";
        break;
        case "14":
        case "15":
        document.getElementById("comprobarCategoria").innerHTML = "Cadetes 14 y 15 años";
        break;
        case "16":
        case "17":
        case "18":
        document.getElementById("comprobarCategoria").innerHTML = "Juveniles 16,17 y 18 años";
        break;
        default:
        document.getElementById("comprobarCategoria").innerHTML = "Escriba unos años correctos";
        break;

    }

}

/* Función comprobarTrimestre */
function trimestre(){
    var valor5 =  document.getElementById("trimestre").value;
    switch(valor5) {
        case "Enero":
        case"Febrero":
        case "Marzo":
        document.getElementById("comprobarTrimestre").innerHTML = "Es el primer trimestre";
        break;
        case "Abril":
        case"Mayo":
        case "Junio":
        document.getElementById("comprobarTrimestre").innerHTML = "Es el segundo trimestre";
        break;
        case "Julio":
        case"Agosto":
        case "Septiembre":
        document.getElementById("comprobarTrimestre").innerHTML = "Es el tercer trimestre";
        break;
        case "Octubre":
        case"Noviembre":
        case "Diciembre":
        document.getElementById("comprobarTrimestre").innerHTML = "Es el cuarto trimestre";
        break;
        default:
        document.getElementById("comprobarTrimestre").innerHTML = "Escribe un mes en letras que sea correcto";
        break;
    }

}

/* Función comprobarDiaSemana */
function comprobarDia(){
    var valor6 =  document.getElementById("dia_semana").value;
    switch(valor6) {
        case "1":
        document.getElementById("comprobarDiaSemana").innerHTML = "<p>" + " Es Lunes " + "</p>"
        break;
        case "2":
        document.getElementById("comprobarDiaSemana").innerHTML = "<p>" + " Es Martes " + "</p>";
        break;
        case "3":
        document.getElementById("comprobarDiaSemana").innerHTML = "<p>" + " Es Miércoles " + "</p>";
        break;
        case "4":
        document.getElementById("comprobarDiaSemana").innerHTML = "<p>" + " Es Jueves " + "</p>";
        break;
        case "5":
        document.getElementById("comprobarDiaSemana").innerHTML = "<p>" + " Es Viernes " + "</p>";
        break;
        case "6":
        document.getElementById("comprobarDiaSemana").innerHTML = "<p>" + " Es Sábado " + "</p>";
        break;
        case "7":
        document.getElementById("comprobarDiaSemana").innerHTML = "<p>" + " Es Domingo " + "</p>";
        break;
        default:
        document.getElementById("comprobarDiaSemana").innerHTML = "Escribe un número del 1 al 7";
        break;
    }

}

/* Función verSigno */
function verSigno() {
    var valor7 = new Date(document.getElementById("signo").value);
    var valor8 = valor7.toISOString();
    var valor8 = valor8.slice(5,10);
    var valor8 = valor8.replace(/-/i, "");
    console.log(valor8);
    // Le paso las opciones de mes y día, no me interesa el año
    // var options = { month: 'long', day: 'numeric' };
    // dt = new Date(valor7);
    // Esto es un ejemplo fecha.toLocaleDateString("es-ES", options)
    //valor8 = dt.toLocaleDateString("es-ES", options);
    // console.log(valor8);
    // console.log(typeof(valor8));
    // valor9 = new Date(valor8);
    if( valor8 >="0321" && valor8 <= "0420"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Aries";
    } else if( valor8 >="0421" && valor8 <= "0520"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Tauro";
    } else if( valor8 >="0521" && valor8 <= "0621"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Géminis";
    } else if( valor8 >="0622" && valor8 <= "0721"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Cáncer";
    } else if( valor8 >="0722" && valor8 <= "0822"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Leo";
    } else if( valor8 >="0823" && valor8 <= "0921"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Virgo";
    } else if( valor8 >="0922" && valor8 <= "1022"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Libra";
    } else if( valor8 >="1023" && valor8 <= "1122"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Escorpio";
    } else if( valor8 >="1123" && valor8 <= "1221"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Sagitario";
    } else if( valor8 >="1222" && valor8 <= "0120"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Capricornio";
    } else if( valor8 >="0121" && valor8 <= "0218"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Acuario";
    } else if( valor8 >="0219" && valor8 <= "0320"){
        document.getElementById("signoZodiacal").innerHTML = "Eres Piscis";
    } 
}

/* Función comprobarCodigoPostal */
// https://es.wikipedia.org/wiki/Anexo:Provincias_de_Espa%C3%B1a_por_c%C3%B3digo_postal
function codigoPostal() {
    var valor9 = document.getElementById("codigo").value;
    var valor10 = valor9.slice(0,2);
    switch (valor10){
        case "01":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Álava";
        break;
        case "02":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Albacete";
        break;
        case "03":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Alicante";
        break;
        case "04":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Almería";
        break;
        case "05":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Ávila";
        break;
        case "06":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Badajoz";
        break;
        case "07":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Baleares/ Palma de Mallorca";
        break;
        case "08":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Barcelona";
        break;
        case "09":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Burgos";
        break;
        case "10":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Cáceres";
        break;
        case "11":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Cádiz";
        break;
        case "12":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Castellón";
        break;
        case "13":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Ciudad Real";
        break;
        case "14":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Córdoba";
        break;
        case "15":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Coruña";
        break;
        case "16":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Cuenca";
        break;
        case "17":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Gerona";
        break;
        case "18":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Granada";
        break;
        case "19":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Gualajara";
        break;
        case "20":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Guipúzcoa";
        break;
        case "21":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Huelva";
        break;
        case "22":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Huesca";
        break;
        case "23":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Jaén";
        break;
        case "24":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de León";
        break;
        case "25":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Lérida";
        break;
        case "26":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de La Rioja";
        break;
        case "27":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Lugo";
        break;
        case "28":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Madrid";
        break;
        case "29":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Málaga";
        break;
        case "30":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Murcia";
        break;
        case "31":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Navarra";
        break;
        case "32":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Orense";
        break;
        case "33":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Asturias(Oviedo)";
        break;
        case "34":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Palencia";
        break;
        case "35":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Las Palmas";
        break;
        case "36":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Pontevedra";
        break;
        case "37":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Salamanca";
        break;
        case "38":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Santa Cruz de Tenerife";
        break;
        case "39":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Cantabria(Santander)";
        break;
        case "40":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Segovia";
        break;
        case "41":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Sevilla";
        break;
        case "42":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Soria";
        break;
        case "43":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Tarragona";
        break;
        case "44":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Teruel";
        break;
        case "45":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Toledo";
        break;
        case "46":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Valencia";
        break;
        case "47":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Valladolid";
        break;
        case "48":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Vizcaya(Bilbao)";
        break;
        case "49":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Zamora";
        break;
        case "50":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Zaragoza";
        break;
        case "51":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Ceuta";
        break;
        case "52":
        document.getElementById("comprobarCodigoPostal").innerHTML= "Eres de Melilla";
        break;
        default:
        document.getElementById("comprobarCodigoPostal").innerHTML= "Escribe un código que empiece por 01 , máximo 52";
    }

}

/* funcion validarDNI */
function  validarDNI() {
    var valor12 = document.getElementById("dni").value;
    var valor12 = valor12.slice(8);
    console.log(valor12);
    var cadenaLetrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    var encontrar = cadenaLetrasDNI.search(valor12);
    console.log(encontrar);
    if ( encontrar>=0 && encontrar<23) {
        document.getElementById("verdaderoDNI").innerHTML = "El DNI es correcto";
    } else {
        document.getElementById("verdaderoDNI").innerHTML = "No es válido el DNI";
    }
}


/* función  comprobarMomento  */
function comprobarMomento() {
    var valor11 = document.getElementById("tiempo_dia").value;
    console.log(valor11);
    valor11 = valor11.replace(/:/i, "");
    if( valor11>="0601" && valor11<="1200"){
        document.getElementById("comprobarMomentoDia").innerHTML="Estamos de mañana";
    } else if( valor11>="1201" && valor11<="1800"){
        document.getElementById("comprobarMomentoDia").innerHTML="Estamos de tarde";
    } else if( valor11>="1801" && valor11<="0000"){
        document.getElementById("comprobarMomentoDia").innerHTML="Estamos de noche";
    } else if( valor11>="0001" && valor11<="0600"){
        document.getElementById("comprobarMomentoDia").innerHTML="Estamos de madrugada";
    }
}