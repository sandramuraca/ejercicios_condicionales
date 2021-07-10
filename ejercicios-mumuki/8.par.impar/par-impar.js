/*Definí una función esParOImpar que tome un numero y retorne el string par si el numero es par, o el string impar si el numero es impar*/

const esParOImpar = (numero) =>{
    if(numero % 2 === 0){
        return "par";
    } else {
        return "impar";
    }
}

const numero1 = esParOImpar(3);
console.log(numero1);

const numero2 = esParOImpar(10);
console.log(numero2);