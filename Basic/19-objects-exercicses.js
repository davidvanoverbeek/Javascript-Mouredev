//* EJERCICIOS OBJETOS

// 1. Crea un objeto con 3 propiedades
let TV = {
    marca: "LG",
    modelo: "Oled TV",
    precio: 2000
}

// 2. Accede y muestra su valor
console.log(TV.marca)
console.log(TV.modelo)
console.log(TV.precio)

// 3. Agrega una nueva propiedad
TV.pulgadas = 66
console.log(TV)

// 4. Elimina una de las 3 primeras propiedades
delete TV.marca
console.log(TV)

// 5. Agrega una función e invócala
TV.encendido = function() { 
    console.log("La television esta encendida")
} 

TV.encendido()

// 6. Itera las propiedades del objeto
for(let key in TV) {
    console.log(key + ": " + TV[key])
}

// 7. Crea un objeto anidado
let ordenador = {
    caja : "White Sereies 2000",
    grafica : {
        name : "Aorus",
        model : "GeForce GTX 1080 Ti",
        memory : "352 bits GDDR5X 11 GB"
    },
    ram : {
        name  : "Vulcan",
        model : "T-Force",
        memory : "16 GB",
        quantity : 2 
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(ordenador.grafica)
console.log(ordenador.ram)

// 9. Comprueba si los dos objetos creados son iguales
console.log(ordenador.grafica == ordenador.ram)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(ordenador.grafica.memory == ordenador.ram.memory)