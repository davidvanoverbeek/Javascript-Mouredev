//* FUNCIONES

function myFunct() {
    console.log("Hola funcion!")
}

for (let i = 0; i < 5; i++){
    myFunct()
}

// Con Parametros

function myFunctionWithParams(name){
    console.log(`¡Hola, ${name}!`)
}

myFunctionWithParams("David")
myFunctionWithParams("Pedro")

// Funciones Anonimas

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("David")

// Arrow Functions -> Funciones Flecha

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

myFunc3("David van")

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc4("Pedro Picapiedra")

// Párametros

function sum(a, b){
    console.log(a + b)
}

sum(5, 10)

//- Por defecto
function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 10)

//- Retorno de valores
function mult(a, b){
    return a * b
}

let result = mult(5, 10)
console.log(result)

//- Funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()
//intern() -> Fuera del scope

//- Funciones de orden superior
function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "Funcion de orden superior")

//- forEach

myArray = [1, 2, 3, 4]
mySet = new Set(["David", "Pedro", "Paco", "Manolo"])
myMap = new Map([
    ["name", "David"],
    ["email", "davidvanoverbeekcrusells@gmail.com"],
    ["age", 23]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))



