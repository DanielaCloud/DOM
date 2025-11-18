/* 

Selecionar el h1 a travéz de su clase

*/

const titulo = document.querySelector(".titulo");

/* 

Modo seleccionador

*/

console.log(titulo);

/* 

Objeto style

Acceder a este objeto usando la  notación de punto
  nodo.style
Resultado es CSS Style Declaration. Es decir una lista que representa todas las propiedades de estilo del elemento.

Las Propedades cambian del formato kebab-case a camelCase

Unicamente muestra el valor de los estilos en linea declarados directamente en el elemento HTML

*/

console.log(titulo.style)

/* 

Para acceder a las propiedaddes de estilo usamos la notación de (.)

nodo.style.nombrePropiedad

*/

console.log(`El color del titulo es: ` + titulo.style.color)

/* 

Asignar un valor a la propiedad de esilo del nodo seleccionado.

  node.style.color=valor

*/

titulo.style.color="red";

titulo.style.backgroundColor="blue";

titulo.style.fontSize="120px"

/* 

Método setProperty()

Asignamos una propiedad de estilo a un elemento seleccionado.

Sintaxis: 

elemento.style.serProperty(nombrePropiedad, valor, important);

- Más flexible, y por lo tanto más usado.
- Las propiedades se escribe en kebab-kase
- El parametr "important" es opcional.

*/

titulo.style.setProperty('color', 'darkblue');
titulo.style.setProperty('background-color','green','important')

/* Eliminar valores de propiedades del nodo seleccionado 

nodo.style.nombrePropiedad = "" // una cadena vacía. 

En esta sintaxis, la propiedad de CSS va en formato camelCase

*/

//titulo.style.color="";
//titulo.style.backgroundColor = "";

/* 

Metodo removeProperty()

Esto elimina la propiedad de estilo. 

Sintaxis:

elemento.style.removeProperty(nombre-propiedad)

El nombre de la propiedad es en formato kebab-case

*/

titulo.style.removeProperty('color');
titulo.style.removeProperty('background-color');
titulo.style.removeProperty('font-size');
