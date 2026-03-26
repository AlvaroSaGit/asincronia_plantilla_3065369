
import { buscarUsuario, consultarPermisos, generarReporte } from './servicios.js';
console.log("callbacks");
export default function con_callbacks(id) {
    buscarUsuario(id, (usuario) => {           
        consultarPermisos(usuario, (permisos) => {  
            generarReporte(usuario, permisos, (reporte) => {  
                console.log("CALLBACKS:", reporte);
            });
        });
    });
}
