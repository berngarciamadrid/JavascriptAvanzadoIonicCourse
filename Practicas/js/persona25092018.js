'use strict';

// window.onload = iniciar;
// window.addEventListener( ' load' , init);

var personas = document.getElementById('personas');
var empleados = document.getElementById('empleados');


    
personas.style.cssFloat = "left";
empleados.style.cssFloat = "right";
personas.style.width = ""


//  Clase Persona

class Persona {

    constructor( nombre, apellidos, direccion ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
    }

    mostrarInformación ( ) {
        return `Esta persona se llama ${this.nombre} ${this.apellidos} y vive en ${this.direccion}`;
    }
}


//  Clase Empleado
class Empleado extends Persona {
    constructor ( nombre, apellidos, direccion, departamento, salario, portátil ) {
        super(nombre, apellidos, direccion);  // Heredas los argumentos  de la Clase Padre
        this.departamento = departamento;
        this.salario = salario ;
        this.portátil = portátil;
    }

    infoTrabajador ( ) {
        return `Esta persona que se llama ${this.nombre} ${this.apellidos} y vive en ${this.direccion}
        trabaja en el departamento ${this.departamento}, tiene un salario de ${this.salario} 
        y tiene un portátil ${this.portátil}`;
    }
}

// Instancias de la clase Persona
var persona1 = new Persona ('Sergio', 'Martín Vidales', 'Avenida de Oporto 550');
var persona2 = new Persona ('Fernanda', 'Martín Vidales', 'Calle de Oporto 550');
var persona3 = new Persona ('José Carlos', 'Martín Vidales', 'Paseo de Oporto 550');
var persona4 = new Persona ('Jorge', 'Martín Vidales', 'Avenida de Lisboa 550');
var persona5 = new Persona ('Paqui', 'Martín Vidales', 'Avenida de Vigo 550');
var persona6 = new Persona ('Sandra', 'Martín Vidales', 'Avenida de Coimbra 550');
var persona7 = new Persona ('Pablo', 'Martín Vidales', 'Paseo de Barcelona 550');

console.log ( persona1 );
console.log ( persona2 );
console.log ( persona3 );
console.log ( persona4 );
console.log ( persona5 );
console.log ( persona6 );
console.log ( persona7 );



// Mostrar información de la persona
var mostrarDataPerson = document.getElementById('mostrarDataPerson');
mostrarDataPerson.style.marginLeft = "10%";
var texto = "";
texto =  texto  + "<p>" +  persona1.mostrarInformación() + "</p>";
texto += "<p>" + persona2.mostrarInformación() + "</p>";
texto += "<p>" + persona3.mostrarInformación() + "</p>";
texto += "<p>" + persona4.mostrarInformación() + "</p>";
texto += "<p>" + persona5.mostrarInformación() + "</p>";
texto += "<p>" + persona6.mostrarInformación() + "</p>";
texto += "<p>" + persona7.mostrarInformación() + "</p>";
mostrarDataPerson.innerHTML = texto;

/*
var tablaPersona = " ";
tablaPersona += "<tr><th>" + "Nombre" + "</th> <th>" + "Apellidos"+ "</th><th>" + "Dirección" + "</th></tr>";
tablaPersona += "<tr><td>" + persona1.nombre + "</td><td>" + persona1.apellidos + "</td><td>" + persona1.direccion + "</td></tr>";
tablaPersona += "<tr><td>" + persona2.nombre + "</td><td>" + persona2.apellidos + "</td><td>" + persona2.direccion + "</td></tr>";
tablaPersona += "<tr><td>" + persona3.nombre + "</td><td>" + persona3.apellidos + "</td><td>" + persona3.direccion + "</td></tr>";
tablaPersona += "<tr><td>" + persona4.nombre + "</td><td>" + persona4.apellidos + "</td><td>" + persona4.direccion + "</td></tr>";
tablaPersona += "<tr><td>" + persona5.nombre + "</td><td>" + persona5.apellidos + "</td><td>" + persona5.direccion + "</td></tr>";
tablaPersona += "<tr><td>" + persona6.nombre + "</td><td>" + persona6.apellidos + "</td><td>" + persona6.direccion + "</td></tr>";
tablaPersona += "<tr><td>" + persona7.nombre + "</td><td>" + persona7.apellidos + "</td><td>" + persona7.direccion + "</td></tr>";
tablaPersona.innerHTML = tablaPersona;
*/
 

// Instancias de la clase Empleado
var empleado1 = new Empleado ('Sergio', 'Martín Vidales', 'Avenida de Oporto 550', 'Informática', 1500, 'HP 350');
var empleado2 = new Empleado ('Fernanda', 'Martín Vidales', 'Calle de Oporto 550', 'Informática', 1500, 'HP 350');
var empleado3 = new Empleado ('José Carlos', 'Martín Vidales', 'Paseo de Oporto 550', 'Informática', 1500, 'HP 350');
var empleado4 = new Empleado ('Jorge', 'Martín Vidales', 'Avenida de Lisboa 550', 'Informática', 1500, 'HP 350');
var empleado5 = new Empleado ('Paqui', 'Martín Vidales', 'Avenida de Vigo 550', 'Informática', 1500, 'HP 350');
var empleado6 = new Empleado ('Sandra', 'Martín Vidales', 'Avenida de Coimbra 550', 'Informática', 1500, 'HP 350');
var empleado7 = new Empleado ('Pablo', 'Martín Vidales', 'Paseo de Barcelona 550', 'Informática', 1500, 'HP 350');

console.log ( empleado1 );
console.log ( empleado2 );
console.log ( empleado3 );
console.log ( empleado4 );
console.log ( empleado5 );
console.log ( empleado6 );
console.log ( empleado7 );

// Mostrar información del empleado
var mostrarDataEmpleado = document.getElementById('mostrarDataEmpleado');
mostrarDataEmpleado.style.marginLeft = "10%";
var frase = "";
frase =  frase  + "<p>" +  empleado1.infoTrabajador() + "</p>";
frase += "<p>" + empleado2.infoTrabajador() + "</p>";
frase += "<p>" + empleado3.infoTrabajador() + "</p>";
frase += "<p>" + empleado4.infoTrabajador() + "</p>";
frase += "<p>" + empleado5.infoTrabajador() + "</p>";
frase += "<p>" + empleado6.infoTrabajador() + "</p>";
frase += "<p>" + empleado7.infoTrabajador() + "</p>";
mostrarDataEmpleado.innerHTML = frase;



