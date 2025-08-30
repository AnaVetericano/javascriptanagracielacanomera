function resta ( num1, num2)
{
    let resultado = num1-num2
    alert ("El resultado de la resta es : "+ resultado);
    console.log(resultado);
}

function suma ( num1, num2)
{
    let resultado = num1+num2
    alert ("El resultado de la suma es : "+ resultado);
    console.log (resultado);
}

function mult ( num1, num2)
{
    let resultado = num1 * num2
        alert ("El resultado de la multiplicación es : "+ resultado);
    console.log (resultado);
}

function divis ( num1, num2)
{
    let resultado = num1 / num2
    
    alert ("El resultado de la división es : "+ resultado);
    console.log (resultado);
}


let n1 =parseInt(prompt( "Digite numero 1"));
let n2 =parseInt(prompt( "Digite numero 2"));
resta (n1,n2)
suma (n1,n2)
mult (n1,n2)
divis (n1,n2)