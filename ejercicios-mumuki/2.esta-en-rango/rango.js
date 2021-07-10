/*Definí una función estaEnRango que reciba como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)*/


const estaEnRango = (valor,minimo, maximo) =>{
    
    if(valor >= minimo && valor <= maximo){
        return true;
    } else {
        return false;
    }
}

let resultado = estaEnRango(3, 1, 10);
console.log(resultado)

let resultado2 = estaEnRango(1, 1, 10);
console.log(resultado2)

let resultado3 = estaEnRango(10, 1, 10);
console.log(resultado3)

let resultado4 = estaEnRango(12, 1, 10);
console.log(resultado4)

let resultado5 = estaEnRango(-3, 1, 10);
console.log(resultado5)