let precio = parseInt(prompt("Ingrese el precio del producto"));

if (precio >= 1000) {
  alert("Que caro!");
} else {
  alert("Que barato!");
}

let saludo = prompt("Ingrese Hola o Adios");

if (saludo === "Hola") {
  alert("Bienvenido!");
  console.log("Bienvenido! Ud. está llegando.");
} else if (saludo === "Adios") {
  alert("Hasta luego!");
  console.log("Hasta luego! Ud. está saliendo.");
} else {
  prompt("Ingrese Hola o Adios");
  console.log("No es tán dificil la instructions");
}

let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 10 && edad <= 50) {
  alert("Está en el rango de edad que necesita para ingresar!");
} else {
  alert("No está en el rango de edad que necesita para ingresar!");
}
