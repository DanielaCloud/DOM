/* 

Funcones Eventos

La funcion en un evento es el heandler. Es lo que se ejecuta cuando ocurre el evento.

  1. Evento con funcion declarada
    Está funcion se escribe por fuera del evento y se pasa como argumento del listener.

    sintexis:
    target.eventListener(trigger, eventHandler);
    funtion.eventHandler(){
      //Código que se ejecuta
    }
*/

// Referencias
const declarada=document.getElementById("declarada");

// Evento con funcion declarada
declarada.addEventListener('click' , funcionDeclarada);
function funcionDeclarada(){
  console.log("hiciste click en declarada")
}

/* 

  2. Evento con funcion anónima

  La funcion se escribe dentro del evento y no tiene un nombre asignado.
    Sintaxis:
    target.addEventListener(trigger,funcion(){
    //codigo a ajecutar})

*/

//referencia
const anonima = document.getElementById("anonima")

//Evento con funcion anonima

anonima.addEventListener('click', function(){
  console.log("hiciate click en anonima")
})

/* 

3. evento con funcion felcha

esta funcion se escribe dentro del evento, no tiene nombre y es mas concreta

sintaxis:

targer.addEventListener (trigger, () => {//código a ejecutar})

* si el codigo que se ejecuta tiene mas de una linea se debe de escribir entre llaves
* si el codigo que se ejecuta solo tiene una linea, se pueden omitir las llaves.

*/

//referencia
const flecha = document.getElementById("flecha")

//Evento con fucion flecha
flecha.addEventListener('click' , () => {
  console.log("hiciste click en flecha")
})