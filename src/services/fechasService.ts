const formatearFecha = (fecha: Date) => {
    const opcionesDia: Intl.DateTimeFormatOptions = { weekday: 'short' };
    const opcionesNumero: Intl.DateTimeFormatOptions = { day: 'numeric' };
    const opcionesMes: Intl.DateTimeFormatOptions = { month: 'short'}

    const dia = fecha.toLocaleDateString('es-ES', opcionesDia);
    const numero = fecha.toLocaleDateString('es-ES', opcionesNumero);
    const mes = fecha.toLocaleDateString('es-ES', opcionesMes)

    return {dia: dia, numeroDia: numero, mes: mes };

}

const comprobarEstado = () => {
    const hora = new Date()
    
}

export {formatearFecha}