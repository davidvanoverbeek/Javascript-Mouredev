//* TIPOS DE DATOS PRIMITIVOS

// Cadena de texto (string)
let name = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Enteros
let height = 1.77 // Decimales

// Booleanos (booleans)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedVariable


// Null
let nullVariable = null


// Symbol
let mySymbol = Symbol("mysymbol")

// BigInt
let myBigInt = BigInt(1234567890123456789012345678901234567890)
let myBigInt2 = 1234567890123456789012345678901234567890n

// Mostrar los tipos de datos
console.log(typeof name) // string
console.log(typeof alias) // string
console.log(typeof email) // string

console.log(typeof age) // number
console.log(typeof height) // number

console.log(typeof isTeacher) // boolean
console.log(typeof isStudent) // boolean

console.log(typeof undefinedVariable) // undefined

console.log(typeof nullVariable) // object

console.log(typeof mySymbol) // symbol

console.log(typeof myBigInt) // bigint
console.log(typeof myBigInt2) // bigint