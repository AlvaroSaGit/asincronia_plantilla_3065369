

export function buscarUsuario(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(" Usuario #"+ id + ": Juan Manuel "), 1000);
    });
}

export function consultarPermisos(usuario) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Permisos $" + usuario + ": Admin, Venta, Stock"), 2000);
    });
}

export function generarReporte(usuario, permisos) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Reporte final : $" + usuario + "" + permisos), 1000);
    });
}
