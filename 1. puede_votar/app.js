let edad = Number(prompt("ingrese su edad"));

if (edad >70){
    alert ("puede votar");
} else if (edad >= 18 && edad < 70) {
    alert ("debe votar");
} else {
    alert ("no puede votar");
};