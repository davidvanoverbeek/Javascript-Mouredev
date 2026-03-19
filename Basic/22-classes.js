//* CLASES

// Clases
class Person {
    constructor(name,age,alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis
let person = new Person("David", 23, "David van")
console.log(person)

let person2 = new Person("Pedro", 35, "Pedrito")
console.log(person2)

// Valores por defecto
class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias")
     {
        this.name = name
        this.age = age
        this.alias = alias
     }
}

let person3 = new DefaultPerson("David", 23)
console.log(person3)

// Acceso a propiedades
console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "David van"
console.log(person3.alias)

// Funciones en clases
class PersonWithMethod {
    constructor(name,age,alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }
}

let person4 = new PersonWithMethod("David", 23, "David van")
person4.walk()

// Propiedades privadas
class PrivatePerson {
    
    #bank // -> La # convierte la variable a privada

    constructor(name,age,alias,bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("David", 23, "David van", "IBAN123456789")
// console.log(person5.bank) <- No se puede acceder por que es privado
person5.newBank = "IBAN425293412" // Creas una nueva propiedad publica
console.log(person5.newBank)

// Getters y Setters
class GetSetPerson {
    
    #alias
    #age
    #name
    #bank

    constructor(name,age,alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
    }

    get name() {
        return this.#name
    }

    set bank(newBank) {
        this.#bank = newBank
    }

    get bank() {
        return this.#bank
    }
}

person6 = new GetSetPerson("David", 23, "David van", "IBAN1234567890")
console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN1234567890987654321"
console.log(person6.bank)

// Herencia de clases
class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Emite un sonido generico.")
    }
}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("EL perro corre.")
    }
}

class Fish extends Animal {

    constructor(name,size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada.")
    }
}

let myDog = new Dog("Neo")
myDog.run()
myDog.sound()

let myFIsh = new Fish("Bolita", "10cm")
myFIsh.sound()
myFIsh.swim()

// Metodos estaticos
class MathOperations {

    static sum(a, b){ // Static significa que es una instancia unica, no hay que crear nueva instancia para inicializar
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))

