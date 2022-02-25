// Crear un programa que le permita a una persona jugar al cachipún contra el computador,
// indicando cuántas veces desea jugar o repetir el juego. El cachipún es un juego entre dos
// personas (en este caso, tú y el computador) donde cada una de ellas de manera
// independiente y secreta debe elegir una de las opciones (piedra, papel y tijera) y compararla
// con la opción de la otra persona. Para determinar quien gana, se deben seguir las siguientes
// reglas:
//  Tijera le gana a papel
//  Papel le gana a piedra
//  Piedra le gana a tijera
//  Si ambos jugadores eligen la misma opción es un empate

/////Requerimientos///
// 1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
// decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
// mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
// dependiendo de las veces que haya indicado el usuario que desea jugar.
// 2. Solicitar al usuario que indique su jugada.
// Las opciones son las siguientes:
// ● Piedra
// ● Papel
// ● Tijera
// 3. Generar una jugada automática para la máquina usando la función Math.random()
// de Javascript.
// 4. Definir a un ganador considerando la jugada del usuario y la generada
// automáticamente para la máquina.
// 5. Indicar el resultado de la partida dependiendo del caso:
// ● Felicitar al ganador en caso de ser el usuario.
// ● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
// la que gane.
// ● Declarar un empate.

const playgames = parseInt(prompt("Cuantas veces deseas jugar?"));

for (let i = 1; i <= playgames; i++) {
  function play(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let opcionMaquina = play(1, 3);

  const usuarioOpcion = parseInt(
    prompt(`Escribe el número correspondiente a tu elección:
                                                     ( 1 ) Piedra.
                                                     ( 2 ) Papel.
                                                     ( 3 ) Tijera.   `)
  );

  let piedra = 1;
  let papel = 2;
  let tijera = 3;

  let opcion = ["", "Piedra", "Papel", "Tijera"];

  const theUser = usuarioOpcion;
  const trouble = opcion;
  const machine = opcionMaquina;

  alert("Elegiste " + trouble[theUser]);
  alert("Javascript eligió " + trouble[machine]);



  if (theUser == piedra) {
         if (machine == piedra) {
           alert("Empate!");
         } else if (machine == papel) {
           alert("Perdiste :( ");
         } else if (machine == tijera) {
           alert("Ganaste!");
         }
      } else if (theUser == papel) {
         if (machine == piedra) {
           alert("Ganaste!");
         } else if (machine == papel) {
           alert("Empate!");
         } else if (machine == tijera) {
           alert("Perdiste!");
         }
       } else if (theUser == tijera) {
         if (machine == piedra) {
           alert("Perdiste!");
         } else if (machine == papel) {
           alert("Ganaste!");
         } else if (machine == tijera) {
           alert("Empate!");
         }
       } else {
         alert("¿Oop que sucedio?");
       }
    }
    




















//   if (opc == piedra) {
//     if (p == piedra) {
//       alert("Empate!");
//     } else if (opcionMaquina == papel) {
//       alert("Perdiste :( ");
//     } else if (opcionMaquina == tijera) {
//       alert("Ganaste!");
//     }
//   } else if (opc == papel) {
//     if (p == piedra) {
//       alert("Ganaste!");
//     } else if (opcionMaquina == papel) {
//       alert("Empate!");
//     } else if (opcionMaquina == tijera) {
//       alert("Perdiste!");
//     }
//   } else if (opc == tijera) {
//     if (opcionMaquina == piedra) {
//       alert("Perdiste!");
//     } else if (opcionMaquina == papel) {
//       alert("Ganaste!");
//     } else if (opcionMaquina == tijera) {
//       alert("Empate!");
//     }
//   } else {
//     alert("¿Oop que sucedio?");
//   }

