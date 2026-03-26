
import { buscarUsuario, consultarPermisos, generarReporte } from './servicios.js';

console.log("Promesas ");
export default function con_promesas(id) {
    buscarUsuario(id)
        .then(usuario => consultarPermisos(usuario))
        .then(permisos => generarReporte(permisos.split(':')[0], permisos))
        .then(reporte => console.log("PROMESAS:", reporte));
}