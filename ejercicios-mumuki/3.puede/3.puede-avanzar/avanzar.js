/*Definí una función puedeAvanzar que tome por parámetro un string con un color del semáforo y nos diga si puede avanzar*/

const puedeAvanzar =(color) =>{
    if(color === "verde"){
        return true
    } else if (color === "amarillo"){
        return false
    } else if(color === "rojo"){
        return false
    }
}

const color1 = puedeAvanzar('verde');
console.log(color1);  

const color2 = puedeAvanzar('amarillo')
console.log(color2);

const color3 = puedeAvanzar('rojo')  
console.log(color3);