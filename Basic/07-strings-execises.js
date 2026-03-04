//* EJERCICIOS STRINGS

// 1. Concatena dos cadenas de texto
let nombre = "David"
let edad = 23
console.log("Hola me llamo" + nombre + " y tengo " + edad + "años!")

// 2. Muestra la longitud de una cadena de texto
let presentacion = "Hola, buenos dias"
console.log(presentacion.length)

// 3. Muestra el primer y ultimo caracter de un string
console.log(presentacion[0])
console.log(presentacion[16])

// 4. Convierte a mayuscula y minusculas un string
console.log(presentacion.toUpperCase())
console.log(presentacion.toLowerCase())

// 5. Crea una cadena de texto en varias lineas
let ejemplo = `Soy David
            y voy a
            ser un 
            gran programador`

// 6. Interpola el valor de una variable en un string 
let nombre1 = "Daniel"
let edad1 = 26
console.log(`Hola, buenos dias me llamo ${nombre1} y tengo ${edad1} años!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "Un chiste malo siempre es gracioso"
console.log(frase.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase.includes("malo"))

//9. Comprueba si dos strings son iguales
let phrase1 = "hola como estas"
let phrase2 = "Hola como estas"
if(phrase1 === phrase2) {
    console.log("Son iguales")
}else {
    console.log("No son iguales")
}

//10. Comprueba si dos string tienen la misma longitud
if (phrase1.length === phrase2.length) {
    console.log("Son iguales")
} else {
    crossOriginIsolated.log("No son iguales")
}
