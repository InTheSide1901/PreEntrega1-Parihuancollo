let jugar = true;

while (jugar) {
  let numeroAleatorio = Math.ceil(Math.random() * 10);
  let intentosRestantes = 3;
  let nombre = prompt("Por favor ingrese su nombre:");
  
  while (intentosRestantes > 0) {
    let numeroElegido = prompt("Bienvenido/a " + nombre + ", por favor adivine el numero del 1 al 10");
    numeroElegido = parseInt(numeroElegido);

    if (numeroElegido == numeroAleatorio) {
      console.log("¡Felicidades " + nombre + "!" + ", adivinaste el numero correcto, por lo tanto ¡Ganaste el juego!");
      console.log("--------------------------------");
      break;
    } else {
      console.log("Incorrecto, " + nombre + " aun te quedan " + (intentosRestantes - 1) + " intentos");
      intentosRestantes -= 1;
    }
  }

  if (intentosRestantes == 0) {
    console.log("Lo siento, " + nombre + ". Se agotaron tus intentos. El numero era " + numeroAleatorio);
    console.log("-----------------------------------");
  }

  let respuesta = prompt( nombre + ", ¿Deseas jugar nuevamente? responde 'sí' o 'no'");

  if (respuesta.toLowerCase() != "si") {
    jugar = false;
  }
}

