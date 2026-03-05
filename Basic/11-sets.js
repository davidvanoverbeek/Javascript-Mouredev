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
console.log(mySet(4)) // DELETE -> Tambien funciona como un boolean para saber si se borra o no

// has
