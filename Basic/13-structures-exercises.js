//* EJERCICIOS ESTRUCTURAS

// 1. Crea un array que almacene cinco animales
let array1 = ["Perro", "Gato", "Pez", "Conejo", "Raton"]
console.log(array1)

// 2. Añade dos más. Uno al principio y otro al final
array1.unshift("Vaca")
array1.push("Leon")
console.log(array1)

// 3. Elimina el que se encuentra en tercera posición
array1.splice(2, 1)
console.log(array1)

// 4. Crea un set que almacene cinco libros
let set1 = new Set(["Blackwater", "Game of Thrones", "House of the Dargon", "Lord of the Rings", "Hobbit"])
console.log(set1)

// 5. Añade dos más. Uno de ellos repetido
set1.add("Sunfire")
set1.add("Blackwater")
console.log(set1)

// 6. Elimina uno concreto a tu elección
set1.delete("Sunfire")
console.log(set1)

// 7. Crea un mapa que asocie el número del mes a su nombre
let map1 = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"]
])
console.log(map1)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(map1.has("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
map1.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(map1)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array2 = [1, 2, 3, 4, 5]
console.log(array2)
let set2 = new Set(array2)
console.log(set2)
let map2 = new Map()
map2.set("Numeros", set2)
console.log(map2)