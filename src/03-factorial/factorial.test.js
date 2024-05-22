const factorial = require('./factorial');

test('calcular el factorial de 5', () => {
    expect(factorial(5)).toBe(120);
});

test('el factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
});

test('el factorial de un número negativo debe devolver NaN', () => {
    expect(factorial(-1)).toBeNaN();
});
