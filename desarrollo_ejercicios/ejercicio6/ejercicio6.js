
/* 6. Manejo de errores con Promesas
Ejercicio:
Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y
reject.
Meta: entender .catch() y la importancia del manejo de errores. */





console.log("iniciando proceso.......");

function promesaPeligrosa() {
    return new Promise((resolve, reject) => {
        try {
               // simular proceso que puede  fallar
            setTimeout(() => {
                if (Math.random() < 0.5) {
                         // simula una respuesta exitosa
                    resolve("promesa exitosa ");
                } else {
                    //simula una respuesta de fallo 
                    throw new Error("Fallo al 50% : Proceso fallo");
                }
            }, 2000); // esperar 2 segundps
        } catch (error) {
            
            reject(error.message);
        }
    });
}


promesaPeligrosa()
    // esto hace el resolve exitoso si se cumple la promesa
    // imprimimso el resultado exitoso
    .then(resultado => {
        console.log(resultado);   // ← "✅ ÉXITO: Todo OK"
    })
    // esto hacer el reject error si no se cumple la promesa 
    // imprimimso el catch resultado fallo
    .catch(error => {
        console.log(error);       
    });