/*Más joven

Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad. Realizá el algoritmo correspondiente y represéntelo con un diagrama de flujo y pseudocódigo*/


const nombrePersona1 = "Juan Perez";
const edadPersona1 = 40;

const nombrePersona2 = "El Bahiano";
const edadPersona2 = 23;

const nombrePersona3 = "Sigmund Freud";
const edadPersona3 = 37;

let masJoven = Math.min (edadPersona1, edadPersona2, edadPersona3);//compara las variables y dice cual de los numeros es el menor

console.log(masJoven);//para verificar el numero menor

if (masJoven == edadPersona1) {
   alert (`la persona mas joven es ${nombrePersona1} y su edad es ${edadPersona1}`);
} else if (masJoven == edadPersona2) {
    alert (`la persona mas joven es ${nombrePersona2} y su edad es ${edadPersona2}`);
 } else if (masJoven == edadPersona3 ) {
    alert (`la persona mas joven es ${nombrePersona3} y su edad es ${edadPersona3}`);
 };



