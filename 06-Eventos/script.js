/* 
Eventos

un evento es una acción o suceso que ocurre en el navegador o en un elemento del DOM.
Puede ser iniciado por el usuario o por el sistema. Los eventos pueden ser manejados madiante JS.

+ Manejareventos con JS

1. Target (Objetivo o BLanco)

Es el elemento del DOM en el que ha ocurrido el evento. Este se encuentra dentro del objetivo evento (event) y se accede mediante la propiedad event. target

2. Event Listener (escuchador del evento)

Es el "oido" que esta atento a que ocurra un evento en un elemento (target) en especifico. Usamos el metodo addEventListener para escuchar los eventos.

3. Trigger (disparador o desencadenante)

Es el desencadenante que provoca que un evento ocurra. Es la acción que realiza el usuario o el sistema para activar el evento

+Dar clic
+Mover ratón
+Tipear teclas

4. Event Handler (Manejo de Evento)

Es una funsión que se va a ejecutar cada vez que ocurre el evento. Con JS le decimos que va a ejecutar el manejador.

+Mostrar un mensaje
+Cambiar un color
+Agregar un elemento
+Lanzar una alerta

Sintaxis: Target.eventListener( trigger, eventHandler );
target -> elemento donde ocurre el evento
listener -> escucha y decta el evento
trigger -> acción que ocurre en el evento
handler -> la función que se ejecuta al ocurrir el evento

*/

// Seleccionamos un elemento

const button = document.getElementById("button");

// Manejar su evento

button.addEventListener("click" , mostrarMensaje);

// Definir la funsión 

function mostrarMensaje() {
  //Codigo que se ejecuta

  alert("Ya vamonos por favor!"); 
}