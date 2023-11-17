const suma = require('./funciones')

test('5 + 5 debe ser 10', ()=> {
    expect(suma(5, 5)).toBe(10)
})