function agregarprompt()
{
    let notas=[]
    for (let i=0; i<=4; i=i+1){
        let datos = parseFloat(prompt("Digite los elementos" + i));
        notas[i]=datos
        alert("El listado de las notas es :" + notas[i])
        console.log(notas[i])
        

    }

}
agregarprompt()

