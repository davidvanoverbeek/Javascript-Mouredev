//* EJERCICIOS OPERADORES LOGICOS

// 1. Crea una variable para cada operación aritmética
let suma = 2 + 3
let resta = 3 - 2
let multiplicacion = 2 * 3
let division = 3 / 2
let modulo = 3 % 2
let exponente = 2 ** 3

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma += 2
resta -= 2
multiplicacion *= 2
division /= 2
modulo %= 2
exponente **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 2)
console.log(3 < 5)
console.log(2 == "2")
console.log(2 === 2)
console.log(2 <= 3)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 < 2)
console.log(3 > 5)
console.log(2 == "3")
console.log(2 === 3)
console.log(2 >= 3)

// 5. Utiliza el operador lógico and
console.log(5 > 2 && 3 < 10)

// 6. Utiliza el operador lógico or
console.log(3 < 5 || 4 > 10)

// 7. Combina ambos operadores lógicos
console.log(10 > 5 && 5 < 10 || 10 == 11)

// 8. Añade alguna negación
console.log(!(10 > 5 && 5 < 10 || 10 == 11))

// 9. Utiliza el operador ternario
let hayFormula1 = true
hayFormula1 ? console.log("Domingo a 15:00 Formula 1") : console.log("Esta semana no hay Formula 1")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let a = 5 + 2
let b = 3 + 5
console.log(a == b || a < b)