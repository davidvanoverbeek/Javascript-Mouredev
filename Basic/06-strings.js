// STRINGS

//- Concatenacion
let myName = "David"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof(greeting))

//- Longitud
console.log(greeting.length)

//- Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

//- Metodos comunes
console.log(greeting.toUpperCase()) // Pone en mayusculas
console.log(greeting.toLowerCase()) // Pone en minuscula
console.log(greeting.indexOf("David")) // Indice donde esta la palabra
console.log(greeting.includes("David")) // Verifica si incluye la palabra 
console.log(greeting.slice(0, 10)) // Implime el rango seleccionado excluyendo el ultimo
console.log(greeting.replace("David", "MoureDev")) // Reemplaza la palabra por la proporcionada

//- Templates liteals (plantillas literales)
let message = `Hola,
 este es mi
nuevo mensage`
console.log(message)

let email = "david@gmail.com"
console.log(`Hola, ${myName}, tu email es ${email}!`)

