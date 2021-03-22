/*puedeVerPelicula(edad, tieneAutorizacion)
Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres*/

/*
1. creamos la funcion
2. creamos un if que tenga coo condicion que sea mayor a 15 o tenga autorizacion de los padres
3.si es verdadero retorna verdadero sino falso*/

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if(edad >= 15 || tieneAutorizacion == true){
        return true;
    } else {
        return false;
    }
};

console.log (puedeVerPelicula (15, false));
console.log (puedeVerPelicula (12, false));
console.log (puedeVerPelicula (18, false));
console.log (puedeVerPelicula (13, true));
console.log (puedeVerPelicula (18, true));


//optimizacion

const puedeVerPelicula = (edad, tieneAutorizacion) => edad >= 15 || tieneAutorizacion;
