/*let numeroPensado = Math.round(Math.random() * 10);
let intentos = 3;

for (var contador = 1; contador <= intentos; contador++) {
  let numeroElegido = parseInt(prompt("Adivina el número entre 0 y 10"));
  if (numeroElegido === numeroPensado) {
    alert("¡Has ganado!");
    break;
  } else {
    alert("Has fallado. Inténtalo de nuevo.");
  }
}
contador++;
alert("Fin del juego, el numero pensado era: " + numeroPensado);*/

function pedirNumero() {
  let numeroElegido = parseInt(prompt("Adivina el número entre 0 y 10"));
  return numeroElegido;
}
function juego() {
  let numeroPensado = Math.round(Math.random() * 10);
  let intentos = 3;
  let numeroElegido = parseInt(prompt("Adivina el número entre 0 y 10"));
  let contador = 1;
  if (!isNaN(numeroElegido)) {
    while (contador <= intentos && numeroElegido !== numeroPensado) {
      if (numeroElegido === numeroPensado) {
        alert("¡Has ganado!");
        break;
      } else {
        alert("Has fallado. Inténtalo de nuevo.");
      }
      numeroElegido = pedirNumero();
      contador++;
    }
  } else {
    alert("No has introducido un número");
  }

  alert("Fin del juego, el numero pensado era: " + numeroPensado);
}

juego();
