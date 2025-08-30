// Escriba un programa que muestre por consola o alerta los numeros del 1 al 100, sutituyalos segun los siguientes puntos 1 los multiplos de 3


function fixxbuzz ( numero)
{
if  (numero > 1 && numero < 100){
    if(numero %5===0){
        alert("buzz")
    console.log("buzz")
}
if (numero%3===0){
    alert("fixx")
    console.log("fixx")
}
if (numero%3===0 && numero%5===0){
    alert("fixxbuzz")
    console.log("fixxbuzz")
}
}

}

let numero = parseInt(prompt("Escriba un número del 1 al 100"))
fixxbuzz(numero)
