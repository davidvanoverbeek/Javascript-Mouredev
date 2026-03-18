//* DESESTRUCTURACION Y PROPAGACION
 
let myArray = [1, 2, 3, 4]

let person = {
    name : "David",
    age : 37,
    alias : "Starchock"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// DESESTRUCTURACION

//- Sintaxis en Arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//- Sintaxis Arrays con valores predeterminados
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

//- Ignorar elementos Arrays
let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

//- Sintaxis Objetos
let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

//- Sintaxis Objetos con valores predeterminados
let {name2, age2, alias2, email = "davidvanoverbeek@gamil.com"} = person
console.log(name2) // No existe
console.log(age2) // No existe
console.log(alias2) // No existe
console.log(email)

// Sintaxis Objetos con nuevos nombres de variables
let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

let person3 = {
    name: "Pedro",
    age: 30,
    alias: "Pedrito",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "Developer",
        exp: 15,
        work: function() {
        console.log(`La persona de ${this.exp} años de experiencia trabaja`)
        }
    }
}

let {name: name4, job: {name: jobName}} = person3
console.log(name4)
console.log(jobName)

// PROPAGACION (...)

//- Sintaxis Arrays
let myArray2 = [...myArray]

console.log(myArray2)

//- Copia de Arrays
let myArray3 = [...myArray,5 ,6]

console.log(myArray3)

//- Combinacion Arrays
let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

//- Sintaxis Objetos
let person4 = {...person, email: "davidvanoverbeek@gmail.com"}

console.log(person4)

//- Copia Objetos
let person5 = {...person}
console.log(person5)