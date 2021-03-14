/*Costo estacionamiento

El dueño de un estacionamiento requiere un diagrama de flujo con el algoritmo que le permita determinar cuánto debe cobrar por el uso del estacionamiento a sus clientes. Las tarifas que se tienen son las siguientes:
Las dos primeras horas a $5.00 c/u.
Las siguientes tres a $4.00 c/u.
Las cinco siguientes a $3.00 c/u.
Después de diez horas el costo por cada una es de dos pesos.*/

//cantidad horas
let cantidadHoras = Number(prompt("ingrese la cantidad de horas de estacionamiento."));

//valor horas segun cantidad de horas
const valor1 = Number(5); //hasta2 hs
const valor2 = Number(4); //3 siguientes
const valor3 = Number(3); //5 siguientes
const valor4 = Number(2); // + 10

const tarifa1y2Horas = cantidadHoras * valor1;
const fijoPrimeras2Hs = Number(10);
const tarifa3y5Horas =  ((cantidadHoras -2)  * valor2);
const fijoPrimas5Horas = Number (22);
const tarifa6y10Horas = ((cantidadHoras - 5) * valor3);
const tarifaMas10Horas = cantidadHoras * valor4;

if (cantidadHoras >=11){
    alert (`la tarifa es: $ ${tarifaMas10Horas}`);
} else if (cantidadHoras >= 6 && cantidadHoras <= 10) {
    alert (`la tarifa es: $ ${tarifa6y10Horas + fijoPrimas5Horas}`);
} else if (cantidadHoras >= 3 && cantidadHoras <= 5 ) {
    alert (`la tarifa es: $ ${tarifa3y5Horas + fijoPrimeras2Hs}`)
} else if (cantidadHoras >= 0 && cantidadHoras <= 2) {
    alert (`la tarifa es: $ ${cantidadHoras * valor1}`) 
} else if (cantidadHoras < 0 ) {
    alert (`cantidad horas incorrecto`) 
};

