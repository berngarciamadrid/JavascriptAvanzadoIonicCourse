// Variables y Funciones
                // Litros
                var litros = 350;
                
                // Kilómetros
                var kilómetros = 5.3;
            
                // Horas
                var horas = 24;
                
                // Megabytes
                var megabytes = 4096;
               
                // Pulgadas
                var pulgadas = 55;
                
                // Días
                var dias = 1;
                
                // Cálculo del IVA:
                var euroIVA = 50;
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

                // Cálculos 
                var calculo_litros = litros * 100;
                var calculo_km = kilómetros * 1000;
                var calculo_horas = horas * 60;
                var calculo_megabytes= parseFloat(megabytes/1024);
                var calculo_pulgadas= pulgadas * 2.54;
                var calculo_dias=  dias * 24 + " horas, " +  dias * 24 * 60 + " minutos, " + dias * 24 *3600 + " segundos";
                var calculo_IVA=  "= " + resultadoIva;
                var calculo_YEAR= " El año anterior fue: " + (yearactual - 1 )+ " y el año siguiente será: " + (yearactual + 1);
                var calculo_ANYO= " tiene " + anyo_dias + " dias , " + anyo_semanas + " semanas y " + anyo_trimestres + " trimestres";
