/* 7. Uso de Async/Await
Ejercicio:
Crear una función async que espere una promesa de 2 segundos y luego muestre el resultado.
Meta: comprender cómo await pausa la ejecución sin bloquear el hilo.*/

// imprimos un mensaje en pantalla de iniciando 
console.log("iniciando...........");
function obtener_datos(){
return new Promise((resolve) => { // creamos una promesa 
setTimeout(() => resolve("Datos recibidos"), // imprimimos un mensaje   
    6000); // espera 6 segundos 
});
}

// tranformamos una funcion normal en asyncronia en el cual simpre devuelve el promise 
async function iniciando(){
    console.log("preparando el pedido ")
    const datos = await obtener_datos();
    console.log(datos);
    console.log("pedido procesado exitosamente ")
}

// ejecutamos el programa 
iniciando();