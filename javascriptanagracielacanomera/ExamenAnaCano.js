
// Examen Programa para calcular el IMC
let peso = parseInt(prompt("Escriba su peso en kilogramos"));
var estatura = parseInt(prompt("Escriba su estatura en decimales"));
let imc = peso / (estatura * estatura);
var diagnostico = "";


if (imc < 18.5) {
  diagnostico = "Bajo peso";
} else if (imc < 25) {
  diagnostico = "Normal";
} else if (imc < 30) {
  diagnostico = "Sobrepeso";
} else {
  diagnostico = "Obesidad";
}

alert("Peso: " + peso + " kg");
alert("Estatura: " + estatura + " m");
alert("IMC: " + imc.toFixed(2));
alert("Su diagnóstico es " + diagnostico );



