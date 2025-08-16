// Ejercio 3 Descuento en tienda ternario //
var valor = parseInt(prompt("Escriba el valor de su compra"));
let descuento1 = valor-(valor*0,10)
var descuento2 = valor-(valor*0,20)

let res=(valor>=100 && valor<=199)?alert("Obtiene descuento del 10%, el valor a pagar es : "  + descuento1 ):
(valor>=200)?alert("Obtiene descuento del 20%, el valor a pagar es : "  +  descuento2 ):
alert("Paga el valor completo")









