/* Definí una función puedeRenovarCarnet que reciba como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y nos indique si una persona está habilitada para renovar su carnet de conducir. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

 puedeRenovarCarnet(true, true, true)
false
 puedeRenovarCarnet(true, true, false)
false
 puedeRenovarCarnet(true, false, true)
true
 puedeRenovarCarnet(true, false, false)
false
 puedeRenovarCarnet(false, true, true)
false
 puedeRenovarCarnet(false, true, false)
false
 puedeRenovarCarnet(false, false, true)
false
 puedeRenovarCarnet(false, false, false)
false */

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) =>{
    if( pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true){
        return true;
    } else {
        return false;
    }
}

const caso1 = puedeRenovarCarnet(true, true, true);
console.log(caso1);

const caso2 = puedeRenovarCarnet(true, true, false);
console.log(caso2);

const caso3 = puedeRenovarCarnet(true, false, true);
console.log(caso3);

const caso4 = puedeRenovarCarnet(true, false, false);
console.log(caso4);

const caso5 = puedeRenovarCarnet(false, true, true);
console.log(caso5);

const caso6 = puedeRenovarCarnet(false, true, false);
console.log(caso6);

const caso7 = puedeRenovarCarnet(false, false, true);
console.log(caso7);

const caso8 = puedeRenovarCarnet(false, false, false);
console.log(caso8);