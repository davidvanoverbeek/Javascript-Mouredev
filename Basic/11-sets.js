//* SETS

//- Declaracion
let mySet = new Set()

//- Inicializacion 
mySet = new Set(["David", "Pedro", "Antonio"])
console.log(mySet)

//- Metodos Comunes

// add y delete
mySet.add("davidvanoverbeekcrusells") // ADD -> Añade el dato introducido al final del set
console.log(mySet)

mySet.delete("davidvanoverbeekcrusells") // DELETE -> Elimina solo el dato introducido del set
console.log(mySet)
console.log(mySet[4]) // DELETE -> Tambien funciona como un boolean para saber si se borra o no

// has
console.log(mySet.has("David")) // HAS -> Verifica si tiene ese dato en el set
console.log(mySet.has("Brais"))

// size
console.log(mySet.size) // SIZE -> Te devuelve la longitud del set

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array en set
let mySet2 = new Set(myArray)
console.log(mySet2)

// No admite duplicados

mySet.add("davidvanoverbeekcrusells")
mySet.add("Davidvanoverbeekcrusells")
mySet.add("davidvanoverbeekcrusells")
console.log(mySet)