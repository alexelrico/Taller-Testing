const capitalizarCadena = require('./capitalizarCadena');

test('convertir "hola mundo" a "Hola Mundo"', () => {
    expect(capitalizarCadena('hola mundo')).toBe('Hola Mundo');
});

test('comprobar que una cadena vacía devuelva una cadena vacía', () => {
    expect(capitalizarCadena('')).toBe('');
});

test('asegurar que "Hola Mundo" no cambie', () => {
    expect(capitalizarCadena('Hola Mundo')).toBe('Hola Mundo');
});
