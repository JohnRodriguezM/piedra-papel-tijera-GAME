const d = document;

const lista = ['piedra', 'papel', 'tijera'];

const necesarios = {
  traerTexto: d.getElementById("texto"),
  traerBoton: d.getElementById("boton"),
}
const juego = () => {
  const { traerTexto } = necesarios;
  let item = lista[Math.floor(Math.random() * lista.length)];
  let ganaste = `GANASTE, la maquina ha jugado con ${item}`;
  let perdiste = `PERDISTE, la maquina ha jugado con ${item}`;
  let empate = `ha sido un EMPATE, la maquina ha jugado con ${item}`;
  let elemento = traerTexto.value.toLowerCase()
  let parrafoContent = d.getElementById("parrafo");

  if (elemento === lista[0] && item === lista[2]) parrafoContent.innerHTML = ganaste;
  if (elemento === lista[0] && item === lista[1]) parrafoContent.innerHTML =perdiste;
  if (elemento === lista[0] && item === lista[0]) parrafoContent.innerHTML = empate;
  if (elemento === lista[1] && item === lista[0]) parrafoContent.innerHTML = ganaste;
  if (elemento === lista[1] && item === lista[2]) parrafoContent.innerHTML = perdiste;
  if (elemento === lista[1] && item === lista[1]) parrafoContent.innerHTML = empate;
  if (elemento === lista[2] && item ==  lista[1]) parrafoContent.innerHTML = ganaste;
  if (elemento === lista[2] && item === lista[0]) parrafoContent.innerHTML = perdiste;
  if (elemento === lista[2] && item === lista[2]) parrafoContent.innerHTML = empate;
  if(!elemento) return parrafoContent.innerHTML = "Debes escribir una opcion";
};


// se activa el evento al click
d.addEventListener('click', (e) => {
  if (e.target === necesarios.traerBoton) {
    juego()
  }
})

// se activa el evento para el keydown en el enter
d.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    juego()
  }
})