let numeroPensado = Math.round(Math.random() * 10);
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
alert("Fin del juego, el numero pensado era: " + numeroPensado);
