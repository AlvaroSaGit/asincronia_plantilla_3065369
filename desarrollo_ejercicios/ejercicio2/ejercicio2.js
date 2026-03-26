/* 2. Identificando código bloqueante
Ejercicio:
Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
ejecución del programa.
Meta: evidenciar cómo una tarea pesada bloquea el hilo principal.*/


console.log("hola bienvenido deber esperar la fila para ser atendido ")

let clientes_atendidos = 0;
for (let i = 0; i <10000; i++){
    console.log("numero de fila " + i)
    clientes_atendidos += i * 2;
}
    console.log("Fin. Buenos dias en que lo puedo atender. clientes atendidos:" + clientes_atendidos);
        


    