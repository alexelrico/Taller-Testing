const esPrimo = require('./esPrimo');

test('comprobar que 7 es un número primo', () => {
    expect(esPrimo(7)).toBe(true);
});

test('verificar que 4 no es un número primo', () => {
    expect(esPrimo(4)).toBe(false);
});

test('asegurar que 1 no sea considerado primo', () => {
    expect(esPrimo(1)).toBe(false);
});
