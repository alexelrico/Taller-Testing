function capitalizarCadena(cadena) {
    if (cadena.length === 0) return '';
    return cadena
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}

module.exports = capitalizarCadena;
