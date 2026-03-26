
import { buscarUsuario, consultarPermisos, generarReporte } from './servicios.js';

console.log("Async/Await");
export default async function con_async_await(id) {
    console.log("Iniciando async...");
    const usuario = await buscarUsuario(id);
    const permisos = await consultarPermisos(usuario);
    const reporte = await generarReporte(usuario, permisos);
    console.log("ASYNC/AWAIT:", reporte);
}