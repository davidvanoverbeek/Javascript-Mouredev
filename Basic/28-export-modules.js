//* EXPORTACION DE MODULOS

// Exportacion de modulos

// funciones
export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// propiedades
export const PI = 3.1416
export const name = "David"

// clases
export class Circle{

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this,this.radius, 2)
    }

    perimeter() {
        return 2 * Map.PI * this.radius
    }
}

// Exportacion por defecto
export default function substract(a, b) { // EL DEFAULT ES UNICO PARA QUE NO DE ERROR
    return a - b
}

/*export default class myClass{
    
    func() {
        console.log("")
    }
}*/


