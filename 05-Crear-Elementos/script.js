/* 

Obtener un elemento de referencia. Este será el modo de HTML donde vamos a crear el nuevo elemento.

*/

const peliculas = document.getElementById("peliculas");

/* 

Para crear un nuevo elemento usamos createElement()

Sintaxis:

 document.createElement("tipoElemento");

*/

const nuevaPeli = document.createElement("li");

console-log(nuevaPeli);

/* 

Para agregar el elemento al DOM, tomamos el elemento de referencia y usamos el método appendi()

Sintaxis;

  elementoReferencia.append(nuevoElemento);

*/

peliculas.append(nuevaPeli);

/* 

Para agregarle contenido al nuevo elemento podemos usar innerTex

*/

nuevaPeli.innerText = "Terminator";
console.log(peliculas)

/* Agregarle las clases: pelicula y fondo-dos al nuevo */

/* nuevapeli.classList.add(" pelicula");
nuevapeli.classlist.add("fondo-dos"); */

nuevapeli.classList.add("pelicula" , "fondo-dos"); // Agremás más clases separadas por comas