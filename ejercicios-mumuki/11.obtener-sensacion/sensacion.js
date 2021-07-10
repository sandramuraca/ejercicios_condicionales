/*Definí una función obtenerSensacion que tome por parámetro un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

Temperatura	Mensaje
Menor a 0° -->	¡Está helando!
Mayor o igual a 0° y menor a 15° -->	¡Hace frío!
Mayor o igual a 15° y menor a 25° -->	Está lindo
Mayor o igual a entre 25° y menor a 30°-->	Hace calor
Mayor o igual de 30° -->	¡Hace mucho calor!
*/

const obtenerSensacion = (temperatura) =>{
    if(temperatura < 0){
        return "¡Está helando!";
    } else if ( temperatura >= 0 && temperatura < 15){
        return "¡Hace frío!";
    } else if ( temperatura >= 15 && temperatura < 25){
        return "Está lindo";
    } else if ( temperatura >= 25 && temperatura < 30){
        return "Hace calor";
    }  else if ( temperatura >=  30){
        return "¡Hace mucho calor!";
    } 
}

const temperatura1 = obtenerSensacion(33);
console.log(temperatura1);

const temperatura2 = obtenerSensacion(-1);
console.log(temperatura2);

const temperatura3 = obtenerSensacion(5);
console.log(temperatura3);

const temperatura4 = obtenerSensacion(16);
console.log(temperatura4);

const temperatura5 = obtenerSensacion(28);
console.log(temperatura5);