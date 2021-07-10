  /*
        Definí una función esConsonante que reciba como argumento un string letra y nos indique si letra es una consonante.
        */

        const esConsonante =(letra)=>{
            if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
                return false
            } else {
                return true
            }
        }

        console.log(esConsonante("a"));
        console.log(esConsonante("n"));
        console.log(esConsonante("e"));