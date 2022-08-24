/* IIndica la cantidad de paginas de un libro y las enumera */

let pagina = parseInt(prompt("Introduzca cuantas paginas tiene su libro: "))

for (let i = 1; i <= pagina; i++) {
    console.log("Pagina - " + i)
} 

/* Eleva un numero al cuadrado, para parar el ciclo se tiene que escribir 0*/

let ingresarNumero = parseInt(prompt("Ingresar un numero para elevarlo al cuadrado (Introduce 0 para salir): "))

while (ingresarNumero !== 0){
    console.log(ingresarNumero ** 2)
    ingresarNumero = parseInt(prompt("Ingresar otro numero: "))
}