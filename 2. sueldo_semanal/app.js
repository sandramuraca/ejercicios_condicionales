/*Sueldo semanal

Realizá un algoritmo para determinar el sueldo semanal de un trabajador con base en las horas trabajadas y el pago por hora, considerando que después de las 40 horas cada hora se considera como excedente y se paga el doble. Construí el diagrama de flujo, el pseudocódigo. */


let horasTrabajadas = Number(prompt("ingrese cantidad de horas trabajadas"));
const pagoHoraNormal = Number(500);
let sueldoSemanalHoraNormal = horasTrabajadas * pagoHoraNormal;
const pagoHoraExcedente = pagoHoraNormal * Number (2);
let horaExcedente = horasTrabajadas - Number(40);
let sueldoSemanalHoraExcedente = horasTrabajadas * pagoHoraExcedente;
/*let sueldoMayorA40hs = sueldoSemanalHoraNormal +(horaExcedente * pagoHoraNormal);*/
let sueldoMayorA40hs = Number(40*500) + (horaExcedente*pagoHoraExcedente);

if (horasTrabajadas > 0 && horasTrabajadas <= 40) {
    alert(`Su sueldo semanal es $ ${sueldoSemanalHoraNormal}`);
} else if (horasTrabajadas > 40){
    alert (`Su sueldo semanal es $ ${sueldoMayorA40hs}`)
};
