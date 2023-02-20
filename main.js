// VARIABLES
// Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
// Comenta el código que muestra el cuadro de diálogo (línea 3 solución)
// alert("JavaScript funcionando correctamente");  

// Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;
console.log(variableSinValor)

// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true
let booleano2 = false
console.log(booleano1)
console.log(booleano2)

// Crear variable tipo const de nombre PI declarada con valor 3.14 (se ha cambiado el valor de PI y se han añadido más decimales para un apartado más adelante.)
const PI = 3.141234124;
console.log(PI)

// Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 2 * PI;
console.log(TAU)

// Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "Guillermo";
console.log(miNombre)

// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = 20;
console.log(miNumeroFav)

// Crea una variable de tipo booleano
const gamer = true;
console.log(gamer)

// Muestra por consola la longitud de la variable miNombre
console.log(miNombre.length);

// Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFav);

// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
const nombre = "Euralio";
const numeu = 7;
console.log("Mi nombre es " + nombre + " y mi numero favorito es " + numeu)

// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
const mayus = "Seré un crack en JavaScript al terminar el bootcamp"
console.log(mayus.toUpperCase())

// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
const fivchar = "Hola soy un crack"
console.log(fivchar.substring(0, 4))

// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
const miNumeroFav1 = miNumeroFav.toString()
console.log(typeof miNumeroFav1)

// Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola
console.log(`Mi nombre es ${nombre} y mi numero favorito es ${numeu}`)

// Muestra por consola la variable PI hasta los 2 primeros decimales
console.log(PI.toFixed(2))

// ARRAYS
// Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio
console.log(arrayVacio)

// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros)

// Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arrayNumeros2)

// Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8]
console.log(arrayNumerosPares)

// Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log(arrayNumerosNeg)

// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ['Hola', 'Mundo']
console.log(holaMundo)

// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']
console.log(loGuardoTodo)

// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
console.log(arrayDeArrays)

// Muestra por consola la longitud del array “loGuardoTodo”
console.log(loGuardoTodo.length)

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
loGuardoTodo.push("prueba");
console.log(loGuardoTodo)

// Muestra por consola el valor ‘que’ de la variable loGuardoTodo
console.log(loGuardoTodo[1])

// Añade el valor ‘Euralio’ en la array loGuardoTodo y muestrala por consola
loGuardoTodo.push("Euralio");
console.log(loGuardoTodo[6])

// OBJETOS
// Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const coche = {
  Marca: "Chrysler",
  Modelo: 300,
  Matrícula: "3423FGT",
};
console.log(coche)

// Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
const Casa = {
  codPostal: 46033,
  calle: "Gran Vía",
  portal: 34,
  piso: 8,
}
console.log(Casa)

// Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

const FullStackDeveloper = {
  arrayLenguajes: ["javascript", "php"],
  arrayProyectos: ["paginapersonal", "etc"],
};

console.log(FullStackDeveloper)

// Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
const Perro = {
  nombre: "Gala",
  raza: "Husky",
  color: "MarronBlanco",
  edad: 9,
}
console.log(Perro)

// Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
const Noticia = {
  titular: "TitulardelaNoticia",
  cuerpo: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
}
console.log(Noticia)

// Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
const Persona = {
  nombre: "Guillermo",
  apellidos: "Soler Fernández",
  edad: 35,
}
console.log(Persona)

// Muestra por consola el nombre de la variable Persona
console.log(Persona.nombre)

// Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
console.log(FullStackDeveloper.arrayLenguajes[0])

// Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
const Portatil = {
  marca: "Asus",
}
console.log(Portatil.marca)

// Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log(Portatil["marca"])

// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const Concierto = {
  grupos: ["IronMaiden", "ACDC"]
};
console.log(Concierto)

// Crea un objeto de nombre Led, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola. La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’]
const Led = {
  lampara1: "Rojo",
  lampara2: "Verde",
  lampara3: "Azul",
}
const RGB = [Led.lampara1, Led.lampara2, Led.lampara3]

console.log(RGB)

// Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola
const O_Error = {
  codigo: "Error 404",
}
console.log(O_Error.codigo)

// Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes
const Grupo = {
  integrantes: ["int1", "int2", "int3"]
}
const integrantes = Grupo.integrantes
console.log(integrantes[1])

// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
let Impresora = {
  Tinta: {
    rojo: "rojo",
    verde: "verde",
    azul: "azul",
  }
}
let nivelesTinta = Object.values(Impresora.Tinta)
console.log(nivelesTinta)

// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
const Movil = {
  especificaciones: "Nokia"
}
const especificaciones = Movil["especificaciones"]

console.log(Movil["especificaciones"])
console.log(especificaciones)


// Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
Portatil.marca = "MSI"
console.log(Portatil.marca)

// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
Concierto.grupos.push("Guns N' Roses")
console.log(Concierto)
  
// Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy, investiga que es new Date y como usarlo), consolea el resultado
Concierto["fecha"]= "2022-03-30"
Concierto.fecha= new Date ()
console.log(Concierto.fecha)

// Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
Grupo.integrantes.pop()
console.log(Grupo.integrantes.length)
