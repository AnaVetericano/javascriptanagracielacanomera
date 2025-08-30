//  Crear un arreglo de nombres y agregar un nuevo nombre en una posición específica
// Instrucciones:
// Crea un arreglo con los nombres "Ana", "Luis", "Carlos".
// Agrega el nombre "María" en la posición 1.
//Muestra el arreglo después de agregar el nuevo nombre.

function nombres()
{
    let nombres=[]
    nombres.push("Ana")
    console.log=(nombres)
    nombres.push("Luis")
    console.log=(nombres)
    nombres.push("Carlos")
    console.log=(nombres)
    nombres.splice(1,0,"Maria")
    console.log=(nombres)
}

nombres()

