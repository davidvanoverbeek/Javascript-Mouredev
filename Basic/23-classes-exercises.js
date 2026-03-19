//* EJERCICIOS CLASES

// 1. Crea una clase que reciba dos propiedades
class Propiedades1 {

    constructor(propiedad1, propiedad2){
        this.propiedad1 = propiedad1
        this.propiedad2 = propiedad2
    }
}


// 2. Añade un método a la clase que utilice las propiedades

class Propiedades2 {

    constructor(propiedad1, propiedad2){
        this.propiedad1 = propiedad1
        this.propiedad2 = propiedad2
    }

    imprimir() {
        console.log(this.propiedad1)
        console.log(this.propiedad2)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let propiedades = new Propiedades2(15, "Perro")
propiedades.imprimir()

// 4. Añade un método estático a la primera clase
class Propiedades3 {

    static imprimir(propiedad1, propiedad2) {
        console.log(propiedad1)
        console.log(propiedad2)
    }
}

// 5. Haz uso del método estático
Propiedades3.imprimir("perro", "gato")

// 6. Crea una clase que haga uso de herencia
class Vehiculo {
    constructor(marca, modelo, cv, motor, combustible){
        this.marca = marca
        this.modelo = modelo
        this.cv = cv
        this.motor = motor
        this.combustible = combustible
    }

    tipo() {
        console.log("Vehiculo")
    }
}

class Coche extends Vehiculo {

    tipo() {
        console.log("Es un coche")
    }
}

let coche = new Coche("Volkswagen", "Golf", 105, 1199, "TSI")
console.log(coche.marca)
console.log(coche.modelo)
console.log(coche.cv)
console.log(coche.motor)
console.log(coche.combustible)
coche.tipo()


// 7. Crea una clase que haga uso de getters y setters
class CuentaBancaria {
    #iban
    #pin

    constructor(iban, pin){
        this.#iban = iban
        this.#pin = pin
    }

    get IBAN() {
        return this.#iban
    }

    get Pin() {
        return this.#pin
    }

    set IBAN(newIBAN) {
        this.#iban = newIBAN
    }

    set Pin(newPin) {
        this.#pin = newPin
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
let cuenta = new CuentaBancaria("IBAN12342413", 3123)
cuenta.IBAN = "ASDA126343"
cuenta.Pin = 4234

// 9. Utiliza los get y set y muestra sus valores
console.log(cuenta.IBAN)
console.log(cuenta.Pin)

// 10. Sobrescribe un método de una clase que utilice herencia
class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Sonido.")
    }
}

class Gato extends Animal {

    constructor(name, edad, familia) {
        super(name)
        this.edad = edad
        this.familia = familia
    }

    sound() {
        console.log("Meow!")
    }
}

let gato = new Gato("Flufy", 2, "Felino")
console.log(gato)
gato.sound()