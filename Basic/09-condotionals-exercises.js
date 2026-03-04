//* EJERCICICOS CONDICIONALES

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "David"

if(nombre == "David") {
    console.log(`Mi nombre es ${nombre}`)
}else {
    console.log("ese no es mi nombre")
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "David"
let contraseña = 1234

if (usuario == "David" && contraseña == 1234) {
    console.log("Log in correctamente, entrando...")
}else {
    console.log("El usuario o la contraseña no son correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5

if (numero > 0) {
    console.log("El numero es positivo")
}else if (numero == 0) {
    console.log("El numero es 0")
}else {
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 11

if (edad >= 18) {
    console.log("Puedes votar por ser mayor de edad")
} else {
    let resto = 18 - edad
    console.log(`No puedes votar, te faltan ${resto} años!`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 
const valor = edad >= 18 ? console.log("adulto") : console.log("Menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 6

if (mes == 0) {
    console.log("Enero")
}else if (mes == 1) {
    console.log("Febrero")
}else if (mes == 2) {
    console.log("Marzo")
}else if (mes == 3) {
    console.log("Abril")
}else if (mes == 4) {
    console.log("Mayo")
}else if (mes == 5) {
    console.log("Junio")
}else if (mes == 6) {
    console.log("Julio")
}else if (mes == 7) {
    console.log("Agosto")
}else if (mes == 8) {
    console.log("Septiembre")
}else if (mes == 9) {
    console.log("Octubre")
}else if (mes == 10) {
    console.log("Noviembre")
}else if (mes == 11) {
    console.log("Diciembre")
}else {
    console.log("El mes introducido no existe")
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 0) {
    console.log("31 dias")
} else if (mes == 1) {
    console.log("28 dias")
} else if (mes == 2) {
    console.log("31 dias")
} else if (mes == 3) {
    console.log("30 dias")
} else if (mes == 4) {
    console.log("31 dias")
} else if (mes == 5) {
    console.log("30 dias")
} else if (mes == 6) {
    console.log("31 dias")
} else if (mes == 7) {
    console.log("31 dias")
} else if (mes == 8) {
    console.log("30 dias")
} else if (mes == 9) {
    console.log("31 dias")
} else if (mes == 10) {
    console.log("30 dias")
} else if (mes == 11) {
    console.log("31 dias")
} else {
    console.log("Este mes no tiene dias")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idiomalet idioma = 3
let idioma = 3

switch (idioma) {
    case 0:
        console.log("Hola, buenos dias")
        break
    case 1:
        console.log("Bonjour, bonjour")
        break
    case 2:
        console.log("Hallo guten Morgen")
        break
    case 3:
        console.log("Hello good morning")
        break
    case 4:
        console.log("Привет, доброе утро")
        break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let meses = 6

switch (meses){
    case 0:
        console.log("Enero")
        break
    case 1:
        console.log("Febrero")
        break
    case 2:
        console.log("Marzo")
        break
    case 3:
        console.log("Abril")
        break
    case 4:
        console.log("Mayo")
        break
    case 5:
        console.log("Junio")
        break
    case 6:
        console.log("Julio")
        break
    case 7:
        console.log("Agosto")
        break
    case 8:
        console.log("Septiembre")
        break
    case 9:
        console.log("Octubre")
        break
    case 10:
        console.log("Noviembre")
        break
    case 11:
        console.log("Diciembre")
        break
    default:
        console.log("El mes introducido no existe")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (meses) {
    case 0:
        console.log("31 dias")
        break
    case 1:
        console.log("28 dias")
        break
    case 2:
        console.log("31 dias")
        break
    case 3:
        console.log("30 dias")
        break
    case 4:
        console.log("31 dias")
        break
    case 5:
        console.log("30 dias")
        break
    case 6:
        console.log("31 dias")
        break
    case 7:
        console.log("31 dias")
        break
    case 8:
        console.log("30 dias")
        break
    case 9:
        console.log("31 dias")
        break
    case 10:
        console.log("30 dias")
        break
    case 11:
        console.log("31 dias")
        break
    default:
        console.log("Este mes no tiene dias")
}