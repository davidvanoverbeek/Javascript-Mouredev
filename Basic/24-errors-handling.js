//* MANEJO DE ERRORES

// Excepcion
/*let myObject*/

//- try-catch
/*try{
    // Codigo que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecucion sin errores")
} catch{
    // Bloque del error
    console.log("Se ha producido un error")
}*/

    // Captura del error
/*try{
    console.log(myObject.email)
}catch (error) {
    console.log("Se ha producido un error:", error.message
    )
}*/

//- finally
/*try{
    console.log(myObject.email)
}catch{
    crossOriginIsolated.log("Se ha producido un error:", error.message)
}finally{
    console.log("Este codigo se ejecuta siempre")
}*/

// Lanzar error
function sumIntegers1(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error(sumIntegers1(5, 10))("Esta operacion solo suma numeros")
    }

    if (!Number.isInteger(a) || Number.isInteger(b)) {
        throw new Error("No se pueden sumar estas propiedades")
    }

    return a + b
}
try{
    console.log(sumIntegers1("5",10))
    console.log(sumIntegers1(5, "10"))
    console.log(sumIntegers1(5, 10))
    console.log(sumIntegers1(5.5, 10))
} catch (error) {
    console.log("se ha producido un error: ", error.message)
}
//throw new Error("Se ha producido un error");

// TypeError
function sumIntegers2(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error(sumIntegers2(5, 10))("Esta operacion solo suma numeros")
    }

    if (!Number.isInteger(a) || Number.isInteger(b)) {
        throw new Error("No se pueden sumar estas propiedades")
    }

    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b)
    }

    return a + b
}

try{
    /*console.log(sumIntegers2("5",10))
    console.log(sumIntegers2(5, "10"))
    console.log(sumIntegers2(5, 10))
    console.log(sumIntegers2(5.5, 10))*/
} catch (error) {
    console.log("se ha producido un error: ", error.message)
}

// Capturar varios tipos de errores
try{
    console.log(sumIntegers2("5",10))
    console.log(sumIntegers2(5.5, 10))
} catch (error) {
    if(error instanceof TypeError) {
        console.log("Se ha producido un erro de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizados
class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try{
    console.log(sumIntegers2(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
    error.printNumbers
}
