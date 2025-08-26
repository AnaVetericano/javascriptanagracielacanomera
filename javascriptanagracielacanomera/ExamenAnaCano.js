
// Examen Programa para calcular el IMC
let peso = parseFloat(prompt("Escriba su peso en kilogramos"));
var estatura = parseFloat(prompt("Escriba su estatura en decimales"));
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


alert("Su diagnóstico es " + diagnostico );



