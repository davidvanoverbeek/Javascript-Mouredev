//* EJERCICIOS FUNCIONES

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a ,b) {
    return a + b
}
console.log(suma(10, 15))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor(array) {
    let numero = array[0]
    for(let i of array) {
        if (i > numero){
            numero = i 
        }
    }
    return numero
}

console.log(mayor([1, 4, 6, 8, 3, 10]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocals(string){
    let vocales = 0
    for(let letras of string.toLowerCase()) {
        if(letras == "a" || letras == "e" || letras == "i" || letras == "o" || letras == "u") {
            vocales += 1   
        }
    }
    return vocales
}

console.log(vocals("Hola buenos dias David"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function mayúsculas(array){
    let mayusculas = []
    for(let string of array){
        mayusculas.push(string.toUpperCase())
    }
    return mayusculas
}

console.log(mayúsculas(["Hola", "pedro", "manolo", "magnifico"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primo(numero) {
    for(let i = 2; i < numero; i++) {
        if(numero % i == 0) {
            return false
        }
    }
    return true
}

console.log(primo(13))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function union(array1, array2) {
    let array3 = []
    for(let valores of array1) {
        if(array2.includes(valores)){
            array3.push(valores)
        }
    }
    return array3
}

console.log(union([1, 2, 5, 76, 42], [2, 6, 72, 42, 34]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(array) {
    let acumulado = 0
    for(let numeros of array) {
        if(numeros % 2 == 0) {
            acumulado += numeros
        }
    }
    return acumulado
}

console.log(sumaPares([1, 2, 5, 7, 4, 8, 10]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarArray(array) {
    let arrayElevado = []
    for(let numero of array) {
        let elevado = numero ** 2
        arrayElevado.push(elevado)
    }
    return arrayElevado
}

console.log(elevarArray([2, 5, 3, 6, 1]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function inverso(string) {
    return string.split(" ").reverse().join(" ")
}

console.log(inverso("Hola buenos dias me llamo David y tengo 23 años"))

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero) {
    let factorial = numEro
    for(let i = numero; i > 0; i--){
        factorial += i
    }
    return factorial
}

console.log(factorial(5))
