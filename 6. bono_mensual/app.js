/*Bono mensual

Una empresa proporciona un bono mensual, el cual puede ser por antigüedad o bien por el monto del sueldo (el que sea mayor), de la siguiente forma:

Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga 20 % de su sueldo;
Cuando es de 5 años o más, 30 %.
Ahora bien, el bono por concepto de sueldo se calcula según:

Si el sueldo es menor a $1000, se da 25% del mismo
Cuando es mayor a $1000, pero menor o igual a $3500, se otorga 15% de su sueldo
Si es más de $3500, se otorga 10%.
Realizá el algoritmo correspondiente para calcular los dos tipos de bono, asignando el mayor y represéntelo con un diagrama de flujo y pseudocódigo.*/

let sueldo = Number(prompt("Ingrese el sueldo"));
let antiguedad = Number(prompt("Ingrese antiguedad"));

let bono30 = sueldo * Number (0.30); //bono 30% sueldo -$1000
let bono25 = sueldo * Number (0.25);
let bono20 = sueldo * Number (0.20);
let bono15 = sueldo * Number (0.15);
let bono10 = sueldo * Number (0.10);

let porcentaje2a5anios = Number (20);
let porcentaje5anios = Number (30)
let descuentoAntiguedad = 0;

if (antiguedad >= 2  && antiguedad < 5) {
   alert (`Por antiguedad le corresponde un descuento del ${dto2a5anios}%`); 
}else if (antiguedad >= 5) {
    
}