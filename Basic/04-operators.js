// Operadores

//- Operadores Aritmeticos
let a = 5
let b = 10
console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division
console.log(a % b) // Modulo
console.log(a ** b) // Exponente
a++ // Incremento
console.log(a)
b-- // Decremento
console.log(b)

//- Operadores Asignacion
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//- Operadores Comparacion
console.log(a > b) //false
console.log(a < b) //true
console.log(10 >= b) //true
console.log(a <= b) // true
console.log(a == 6) // true Igualdad por valor
console.log(a == "6") // true Igualdad por valor
console.log(a === 6) // true Igualdad por identidad (tipo y valor)
console.log(a === "6") // false Igualdad por identidad (tipo y valor)
console.log(a != 6) // false
console.log(a !=="6") // true
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

//- Truthy Values (Valores Verdaderos)
// Todos los numeros positivos y negativos menos el cero
// Todas las cadens de texto menos las vacias
// El boolean true

//- False values (Valores Falsos)
// 0
// 0n
// null
// undefined
// NaN
// El boolean fasle
// Cadenas de texto vacias

//- Operadores Logicos

// AND (&&)
console.log(5 > 10 && 15 > 20) //false
console.log(5 < 10 && 15 < 20) //true
console.log(5 < 10 && 15 > 20) //false
console.log(5 < 10 && 15 > 20 && 30 > 40) //false

// OR (||)
console.log(5 > 10 || 15 > 20) //false
console.log(5 < 10 || 15 < 20) //true
console.log(5 < 10 || 15 > 20) //true
console.log(5 < 10 || 15 > 20 || 30 > 40) //true

console.log(5 > 10 && 15 > 20 || 30 < 40) //true

// NOT (!)
console.log(!(5 > 10 && 15 > 20)) //true
console.log(!(5 > 10 || 15 > 20))//true
console.log(!(true)) //false
console.log(!(false)) //true

//- Operadores Ternarios
const isRaining = false
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")