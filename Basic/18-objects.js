//* OBJETOS

// Sintaxis
let person = {
    name: "David",
    age: 23,
    alias: "Starchock"
}

// Acceder a las Propiedades

//- Notacion por punto
console.log(person.name)

//- Notacion por Corchetes
console.log(person["name"])

//- Modificacion Propiedades
person.name = "David van"
console.log(person.name)

console.log(typeof(person.age))
person.age = "23"
console.log(person.age)
console.log(typeof(person.age))

//- Eliminar Propiedades
delete person.age
console.log(person)

//- Nueva propiedad
person.email = "davidvanoverbeek@gmail.com"
person["age"] = 37
console.log(person)

// Metodos (funciones)
let person2 = {
    name: "Pedro",
    age: 30,
    alias: "Pedrito",
    walk: function() {
        console.log("La persona camina")
    }
}

person2.walk()

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

console.log(person3)
console.log(person3.name)
console.log(person3.job.name)
console.log(person3.job.work)

// Igualdad de objetos
let person4 = {
    name: "David",
    age: 23,
    alias: "Starchock"
}

console.log(person4)
console.log(person)
console.log(person == person4)
console.log(person === person4)
console.log(person.name == person4.name)

// Iteracion
for(let key in person4) {
    console.log(key + ": " + person4[key])
}

// Fucnciones como objetos
function Person(name, age){ // Deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("David", 23)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)