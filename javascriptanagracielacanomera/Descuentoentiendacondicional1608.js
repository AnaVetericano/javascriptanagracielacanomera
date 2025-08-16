// Ejercio 3 Descuento en tienda condiconal //
var valor = parseInt(prompt("Escriba el valor de su compra"));
let descuento1 = valor-(valor*0,10)
var descuento2 = valor-(valor*0,20)


if(valor>=100 && valor<=199){
     alert("Obtiene descuento del 10%, el valor a pagar es : "  + descuento1)
} 


else if(valor>=200){
     alert("Obtiene descuento del 20%, el valor a pagar es : "  +  descuento2 )
}
else if(valor){
    alert("Paga el valor completo")
}


// Ejercio 3 Descuento en tienda ternario //

(valor>=100 && valor<=199)?alert("Obtiene descuento del 10%, el valor a pagar es : "  + descuento1 ):
(valor>=200)?alert("Obtiene descuento del 20%, el valor a pagar es : "  +  descuento2 ):
alert("Paga el valor completo")

























