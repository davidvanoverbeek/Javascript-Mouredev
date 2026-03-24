//* EJERCICIOS DE IMPORTACION Y EXPORTACION DE MODULOS

// 1. Exporta una función
export function exportacion1() {
    console.log("Export1")
}

// 2. Exporta una constante
export const exportacion2 = "Export2"

// 3. Exporta una clase
export class Exportacion3 {
    imprimir() {
        console.log("Export3")
    }
}

// 4. Importa una función
import { exportacion1 } from "./31-export-import-modules-execises.js"

// 5. Importa una constante
import { exportacion2 } from "./31-export-import-modules-execises.js"

// 6. Importa una clase
import { exportacion3 } from "./31-export-import-modules-execises.js"

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior