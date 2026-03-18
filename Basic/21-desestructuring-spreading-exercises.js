//* EJERCICIOS DESESTRUCTURACION Y PROPAGACION

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array = [1, 2, 3]
let [array0, array1] = array
console.log(array0)
console.log(array1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [array2, array3 = 4] = array
console.log(array2)
console.log(array3)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let mobil = {
    marca: "Iphone",
    modelo: 12,
}

let{marca, modelo} = mobil
console.log(marca)
console.log(modelo)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let{marca1, modelo1, precio = 400, año = 2020} = mobil
console.log(marca1)
console.log(modelo1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let rooter = {
    marca: "Digi",
    modelo: "124f121",
    especificaciones: {
        Ghz: 122,
    }
}

let{marca: marca2, modelo: modelo2, especificaciones: {Ghz: ghzs}} = rooter
console.log(marca2)
console.log(modelo2)
console.log(ghzs)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let newArray1 = [1, 2, 3, 4]
let newArray2 = [5, 6 ,7 ,8]
let newArray = [...newArray1, ...newArray2]
console.log(newArray)

// 7. Usa propagación para crear una copia de un array
let copyArray = [...newArray1]
console.log(copyArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let object1 = {
    name: "Paco",
    surname: "Gomez"
}

let object2 = {
    name: "Pedro",
    surname: "Picapiedra"
}

let object = {...object1, ...object2}
console.log(object)

// 9. Usa propagación para crear una copia de un objeto
let copyObject = {...object1}
console.log(copyObject)

// 10. Combina desestructuración y propagación
let propagacion = {...object2}
console.log(propagacion)
let{name: nombre, surname: apellido} = propagacion
console.log(nombre)
console.log(apellido)