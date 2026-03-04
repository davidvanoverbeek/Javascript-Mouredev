//* EJERCICIOS PRINCIPIANTES

// 1. Escribe un comentario en una línea
// Hola buenos dias, este es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/* Hola buenos dias,
 este es un comentario en varias líneas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let name = "Brais Moure"
let age = 37
let isTeacher = true
let undefinedVariable
let nullVariable = null
let mySymbol = Symbol("mysymbol")
let myBigInt = BigInt(1234567890123456789012345678901234567890)

// 4. Imprime por consola el valor de todas las variables
console.log(name)
console.log(age)
console.log(isTeacher)
console.log(undefinedVariable)
console.log(nullVariable)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof name)
console.log(typeof age)
console.log(typeof isTeacher)
console.log(typeof undefinedVariable)
console.log(typeof nullVariable)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
name = "David"
age = 23
isTeacher = false
undefinedVariable = undefined
nullVariable = null
mySymbol = Symbol("newSymbol")
myBigInt = BigInt(9876543210987654321098765432109876543210)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
name = 123
age = "veintitres"
isTeacher = "no es profesor"
undefinedVariable = null
nullVariable = undefined
mySymbol = "not a symbol"
myBigInt = "not a bigint"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nameConst = "Brais Moure"
const ageConst = 37
const isTeacherConst = true
const undefinedVariableConst = undefined
const nullVariableConst = null
const mySymbolConst = Symbol("mysymbol")
const myBigIntConst = BigInt(1234567890123456789012345678901234567890)

// 9. A continuación, modifica los valores de las constantes
nameConst = "David"
ageConst = 23
isTeacherConst = false
undefinedVariableConst = null
nullVariableConst = undefined
mySymbolConst = "not a symbol"
myBigIntConst = "not a bigint"

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// nameConst = "David"
// ageConst = 23
// isTeacherConst = false
// undefinedVariableConst = null
// nullVariableConst = undefined
// mySymbolConst = "not a symbol"
// myBigIntConst = "not a bigint"