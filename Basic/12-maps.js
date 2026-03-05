//* MAPAS

//- Declaracion
let myMap = new Map()
console.log(myMap)

//- Inicializacion
myMap = new Map([
    ["name", "David"],
    ["email", "davidvanoverbeekcrusells"],
    ["edad", 23]
])
console.log(myMap)

//- Metodos y propiedades

// set
myMap.set("alias", "Starchock1961") // SET -> Añade una clave y valor nuevo
myMap.set("name", "Pedro") // SET -> En caso de que exista la clave lo actualiza
console.log(myMap)

// get
console.log(myMap.get("name")) // GET -> Recoge el clave o valor pedida

// has
console.log(myMap("surname")) // HAS -> Te dice con un boolean si contiene o no la clave o valor pedido

// delete
myMap.delete("email") // DELETE -> Elimina la clave o valor proporcionada
console.log(myMap)

// keys
console.log(myMap.keys()) // KEYS -> Llama a las claves

// values
console.log(myMap.values()) // VALUES -> Llama a los valores

// entries
console.log(myMap.entries) // ENTRIES -> Llama a todas las claves y valores (ITERADOR)

// size
console.log(myMap.size) // SIZE -> Te dice el tamaño del mapa

// clear
myMap.clear() // CLEAR -> Limpia el mapa entero
