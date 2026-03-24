//* METODOS CONSOLA

// Console

//- log
console.log("¡Hola, JavaScript!")

//- error
console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos: ", new Error("Conexion fallida."))

//- warn
console.warn("Este es uns mensaje de advertencia.")

//- info
console.info("Este es un mesaje de informacion adicional.")

//- table
let data = [
    ["David", 23],
    ["Sara", 21]
]

console.table(data)

data = [
    {name: "David", age: 23},
    {name: "Sara", age: 21}
]

console.table(data)

//- group
console.group("Usuario:")
console.log("Nombre: David"),
console.log("Edad: 23")
console.groupEnd()

//- time
console.time("Tiempo de ejecucion 1.")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecucion 2.")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecucion 2.")
console.timeEnd("Tiempo de ejecucion 1.")

//- assert
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

//- count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

//- trace
function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecucion")
}

funcA()

//- clear
console.clear() //- Limpia la consola