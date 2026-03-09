//* EJERCICIOS BUCLES
// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 0; i <= 20; i++) {
    console.log(i)
}

let i = 0
while(i <= 20) {
    console.log(i)
    i++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let valor1
let acumulado1 = 0
for(let i = 0; i <= 100; i++) {
    valor1 = i 
    acumulado1 = i + acumulado1
    console.log(`Suma de ${i} + ${i-1} = ${acumulado1}`)
}

let e = 0
let valor2
let acumulado2 = 0
while (e <= 100) {
    valor2 = e
    acumulado2 = i + acumulado2
    console.log(`Suma de ${e} + ${e-1} = ${acumulado2}`)
    e++
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let a = 0; a <= 50; a++) {
    if(a%2 == 0){
        console.log(`Numero Par: ${a}`)
    }
}

let a = 0
while (a <= 50){
    if(a%2 == 0){
        console.log(`Numero Par: ${a}`)
    }
    a++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let array = ["pedro", "antonio", "maria", "lucia", "alvaro", "paco"]

for(let nombre of array) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "Hola buenos dias me llamo David"


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 3, 4, 6, 8, 2, 5, 7, 9]

for(let numero of numeros) {
    multiplicacion = numero * numero
    console.log(`Multiplicacion ${numero}: ${multiplicacion}`)
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(b = 0; b <= 10; b++) {
    multi = b * 5
    console.log(`5 * ${b} = ${multi}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let texto = "hola";
let invertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
}

console.log(invertido);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let x = 0;
let y = 1;

for (let i = 0; i < 10; i++) {
    console.log(x);
    
    let siguiente = x + y;
    x = y;
    y = siguiente;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeritos = [5, 12, 8, 20, 3, 15];
let mayores = [];

for (let i = 0; i < numeritos.length; i++) {
    if (numeritos[i] > 10) {
        mayores.push(numeritos[i]);
    }
}

console.log(mayores);