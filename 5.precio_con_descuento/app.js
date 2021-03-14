/*Precio con descuento

Realizá el diagrama de flujo y el pseudocódigo que muestren el algoritmo para determinar el costo y el descuento que tendrá un artículo. Considerá que si su precio es mayor o igual a $200 se le aplica un descuento de 15%, y si su precio es mayor a $100 pero menor a $200, el descuento es de 12%, y si es menor a $100, sólo 10%.*/

let precioArticulo = Number(prompt("ingrese el precio del producto"));

let dto15 = precioArticulo * Number (0.15);
let dto12 = precioArticulo * Number (0.12);
let dto10 = precioArticulo * Number (0.10); 

console.log (dto15);

if (precioArticulo >= 200) {
    alert (`precio del articulo: $ ${precioArticulo}
            descuento del 15%: $ ${dto15}
            Precio a pagar con descuento: $ ${precioArticulo - dto15}`);

} else if (precioArticulo >= 100 && precioArticulo <200){
    alert (`precio del articulo: $ ${precioArticulo}
            descuento del 12%: $ ${dto12}
            Precio a pagar con descuento: $ ${precioArticulo - dto12}`);
} else if (precioArticulo >= 0 && precioArticulo <100){
    alert (`precio del articulo: $ ${precioArticulo}
            descuento del 10%: $ ${dto10}
            Precio a pagar con descuento: $ ${precioArticulo - dto10}`);
} else {
    alert ("ud ha ingresadoun precio invalido");
};