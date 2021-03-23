/*jugarPiedraPapelTijera(a, b)
Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)



1. jugador 1 ingresa: PIEDRA
    judador 2, puede ingresar:
    a. papel-- papel gana
    b. tijera --- piedra gana
    c. piedra -- empate
2. jugador 1 ingresa: PAPEL
    judador 2, puede ingresar:
    a. papel-- empate
    b. tijera --- tijera gana
    c. piedra -- papel gana
3. jugador 1 ingresa: TIJERA
    judador 2, puede ingresar:
    a. papel-- tijera gana
    b. tijera --- empata
    c. piedra -- gana piedra
    
    empate = jugadorA == jugadorB
    tijera gana jugadorA == "tijera" && jugadorB "papel" || jugadorA == "papel" && jugadorB "tijera"
    */

const jugarPiedraPapelTijera = (jugadorA,jugadorB) =>{
    if(jugadorA == jugadorB){
        return "Empate!"
    } else if (jugadorA == "tijera" && jugadorB == "papel" ||jugadorA == "papel" && jugadorB == "tijera"){
        return "Gano tijera"
    } else if (jugadorA == "tijera" && jugadorB == "piedra" ||jugadorA == "piedra" && jugadorB == "piedra"){
        return "Gano piedra"
    } else if (jugadorA == "papel" && jugadorB == "piedra" ||jugadorA == "piedra" && jugadorB == "papel"){
        return "Gano papel"
    }
};

console.log (jugarPiedraPapelTijera('tijera', 'piedra'));   // ¡Ganó piedra!
console.log (jugarPiedraPapelTijera('piedra', 'tijera'));  // ¡Ganó piedra!
console.log (jugarPiedraPapelTijera('papel', 'piedra'));   // ¡Ganó papel!
console.log (jugarPiedraPapelTijera('piedra', 'papel'));    // ¡Ganó papel!
console.log (jugarPiedraPapelTijera('papel', 'tijera'));   // ¡Ganó tijera!
console.log (jugarPiedraPapelTijera('tijera', 'papel'));   // ¡Ganó tijera!
console.log (jugarPiedraPapelTijera('piedra', 'piedra'));   // ¡Empate!
console.log (jugarPiedraPapelTijera('papel', 'papel'));    // ¡Empate!
console.log (jugarPiedraPapelTijera('tijera', 'tijera'));   // ¡Empate!

/*lo que paso Matias
const jugarPiedraPapelTijera = (jugadorA,jugardorB)=>{
    if(jugadorA == jugardorB){
      return "¡Empate!"
    }else if(jugadorA == "tijera" && jugardorB =="papel" || jugadorA == "papel" && jugardorB=="tijera"){
      return "¡Ganó tijera!"
    }else if(jugadorA == "tijera" && jugardorB =="piedra" || jugadorA == "piedra" && jugardorB=="tijera"){
      return "¡Ganó piedra!"
    }else if(jugadorA == "papel" && jugardorB =="piedra" || jugadorA == "piedra" && jugardorB=="papel"){
      return "¡Ganó papel!"
    }
  }*/
  