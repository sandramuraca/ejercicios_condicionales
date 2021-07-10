/* 
Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.

 esVocal('a')
true
 esVocal('n')
false
 esVocal('e')
true

*/
const esVocal = (letra) => {
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return true;
    } else{
        return false;
    }
}

const letra1 = esVocal('a');
console.log(letra1);

const letra2 = esVocal('n');
console.log(letra2);

const letra3 = esVocal('e');
console.log(letra3);