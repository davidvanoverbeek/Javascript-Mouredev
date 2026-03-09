//* BUCLES

//- FOR
for(let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

//- WHILE
let i = 0
while(i < 5) {
    console.log(numbers[i])
    i++
}

// while(true) {} BUCLE INFINITO

//- DO WHILE
i = 0
do{
    console.log(numbers[i])
    i++
} while(i < 5)

//- FOR OF
let myString = "Hola Javascript"
myArray = [1, 2, 3, 4]
mySet = new Set(["David", "Pedro", "Antonio", "Mario"])
myMap = new Map([
    ["name", "David"],
    ["edad", 23],
    ["alias", "Starchock1961"]
])

for(let valor of myArray) {
    console.log(valor)
}

for(let valor of mySet) {
    console.log(valor)
}

for(let valor of myMap) {
    console.log(valor)
}

for(let valor of myString) {
    console.log(valor)
}

//- BUENAS PRACTICAS

// break y continue
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 9) {
        break
    }
    console.log(`Hola ${i}`)
}
