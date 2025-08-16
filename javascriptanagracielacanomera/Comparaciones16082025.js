// Ejercicio 1 Edad y categoria deportiva //
let edad = parseInt(prompt("Escriba su edad"));
if ((edad>0) && (edad<=12)){
    alert("Cateria infantil")
} else if ((edad>=13) && (edad<=17)){
    alert("categoria adulto")
} else if ((edad>=18) && (edad<=59)){
    alert ("categoria adulto")
} else if (edad>=60){
    alert ("categoria adulto mayor")
}

// Operador ternario //
((edad>0) && (edad<=12))?  alert("Cateria infantil"):
((edad>=13) && (edad<=17))? alert("categoria adulto"):
((edad>=18) && (edad<=59))? alert ("categoria adulto"):
(edad>=60)? alert ("categoria adulto mayor"):
alert("Escriba un numero correcto, NO es valido un numero en negativo")


