//* ARRAYS

//- Declaracion
let myArray = [] // rellena con los datos introducidos entre []
let myArray2 = new Array() // Reserva los espacios a rellenar o rellena si hay mas de un dato ()

//- Inicializacion
myArray = [1]
myArray2 = new Array(1)
console.log(myArray)
console.log(myArray2)

myArray = ["David", "Antonio", "Pedro", 37, true]
myArray2 = new Array("David", "Antonio", "Pedro", 37, true)
console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "David"
myArray2[1] = "Paco"
myArray2[2] = "Antonio"
console.log(myArray2)

myArray[1] = "Pedro"
console.log(myArray)

//- Metodos Comunes

myArray = []

// push y pop
myArray.push("David") // PUSH -> Agrega al final
myArray.push("Carmen")
myArray.push("23")
myArray.push("24")
console.log(myArray)

myArray.pop() // POP -> Elimina el ultimo y lo devuelve
console.log(myArray)

// shift y unshift
myArray.shift() // SHIFT -> Elimina el primer elemento del array y lo devuelve
console.log(myArray)

myArray.unshift("Brais", "mouredev") // UNSHIFT -> Agrega al inicio del array lo datos proporcionados
console.log(myArray)

// length
console.log(myArray.length) // LENGTH -> Devuelve la longitud del array

// clear
/*myArray = []*/ // CLEAR -> Borra/limpia el array
/*myArray.length = 0*/ // CLEAR -> Borra/limpia el array

//slice
myArray.push(37)
let myNewArray = myArray.slice(1, 3) // SLICE -> Divide el array en el rango entregado sin contar el ultimo
console.log(myArray)
console.log(myNewArray)

//splice
myArray.splice(1, 3) // SPLICE -> Elimia y añade segun los parametros entregados
console.log(myArray)