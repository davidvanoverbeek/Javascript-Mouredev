//* EJERCICIOS MAENJO DE ERRORES

// 1. Captura una excepción utilizando try-catch
let valor

try {
    console.log(valor.nombre)
} catch {
    console.log("El programa a fallado.")
}

// 2. Captura una excepción utilizando try-catch y finally
let numero

try {
    console.log(numero.valor)
} catch {
    console.log("Error.")
} finally {
    console.log("Programa finalizado.")
}

// 3. Lanza una excepción genérica
function ErrorGenerico(a, b) {
        if ( a == 0 || b == 0) {
            throw new Error("Algun valor introducido no es numero")
        }
    }

try {
    console.log(ErrorGenerico(0, 3))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Programa finalizado.")
}

// 4. Crea una excepción personalizada
function Verificacion(a, b) {
        if ( a == 0 || b == 0) {
            throw new ErrorPersonalizado("Algun valor introducido no es numero")
        }
    }
class ErrorPersonalizado extends Error {
    constructor(message,a, b) {
        super(message)
        this.a = a
        this.b = b
    }
}

// 5. Lanza una excepción personalizada
try {
    console.log(Verificacion(0, 3))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Programa finalizado.")
}

// 6. Lanza varias excepciones según una lógica definida
try {
    console.log(Verificacion(1, 3))
    console.log(Verificacion(0, 3))
    console.log(Verificacion(2, 0))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Programa finalizado.")
}

// 7. Captura varias excepciones en un mismo try-catch


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function Verificar(numero) {
    if (Number.isInteger(numero)) {
        console.log("Es un numero")
    } else if (!Number.isInteger(numero)){
        throw new Error("No es un numero")
    }
    return numero
}

try {
    Verificar(2)
    Verificar("a")
} catch (error) {
    console.log("Se ha cometido un error: ", error.message)
} finally {
    console.log("Programa finalizado.")
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
let reintento

try {
    console.log(reintentos.fin)
} catch {
    for (let i = 0; i < 10; i++) {
        console.log("Se ha producido un error, reintentando ...")
    }
} finally {
    console.log("Programa finalizado")
}