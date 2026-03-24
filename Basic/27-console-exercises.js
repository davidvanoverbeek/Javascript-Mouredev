//* EJERCICIOS CONSOLA

// 1. Crea un función que utilice error correctamente
function ErrorPersonal() {
    console.error("Se ha detectado un error", new Error("Error producido:"))
}

ErrorPersonal()

// 2. Crea una función que utilice warn correctamente
function Advertencia() {
    console.warn("Usted esta siendo advertido.")
}

Advertencia()

// 3. Crea una función que utilice info correctamente
function Informar() {
    console.info("Usted esta siendo informado.")
}

Informar()

// 4. Utiliza table
let coche = [
    {
        marca: "Volkswagen",
        modelo: "Golf",
        version: "CUP",
        cilindrada: 1200,
        cv: 105,
        combustible: "Gasolina",
        año: 2014,
        km: 140000,
        precio: 10000
    }
]

console.table(coche)

// 5. Utiliza group
console.group("Coche")
console.log("marca: Volkswagen")
console.log("modelo: Golf")
console.log("version: CUP")
console.log("cilindrada: 1200")
console.log("cv: 105")
console.log("combustible: Gasolina")
console.log("año: 2014")
console.log("km: 140000")
console.log("precio: 10000")
console.groupEnd()

// 6. Utiliza time
console.time("El tiempo de ejecucion es de: ")

for (let i = 0; i < 500; i++) {

}

console.time("El tiempo de ejecucion es de: ")

// 7. Valida con assert si un número es positivo
let numero = -1
console.assert(numero > 0, "El numero no es positivo.")

// 8. Utiliza count
console.count("Numero")
console.count("Numero")
console.count("Numero")
console.count("Numero")
console.count("Numero")
console.countReset("Numero")
console.count("Numero")

// 9. Utiliza trace
function Busqueda() {
    console.trace("La busqueda del archivo es: ")
}

Busqueda()

// 10. Utiliza clear
console.clear()