var Filas = 3;
var Columnas = 3;
var Baldosa_Actual;
var Baldosa_Blanca;
var Turnos = 0;
var Orden_imagen = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function () {
  for (let r = 0; r < Filas; r++) {
    for (let c = 0; c < Columnas; c++) {
      let Baldosa = document.createElement("img");
      Baldosa.id = r.toString() + "-" + c.toString();
      Baldosa.src = Orden_imagen.shift() + ".jpg";

      Baldosa.addEventListener("dragstart", Inicio_Arrastre);
      Baldosa.addEventListener("dragover", Arrastrar);
      Baldosa.addEventListener("dragenter", Poner_Arrastre);
      Baldosa.addEventListener("dragleave", Dejar_Arrastre);
      Baldosa.addEventListener("drop", Soltar);
      Baldosa.addEventListener("dragend", Final_Arrastre);
      document.getElementById("Tablero").append(Baldosa);
    }
  }
};

function Inicio_Arrastre() {
  Baldosa_Actual = this;
}
function Arrastrar(e) {
  e.preventDefault();
}
function Poner_Arrastre(e) {
  e.preventDefault();
}
function Dejar_Arrastre() {}
function Soltar() {
  Baldosa_Blanca = this;
}
function Final_Arrastre() {
  if (!Baldosa_Blanca.src.includes("3.jpg")) {
    return;
  }

  let Coordenada_Actual = Baldosa_Actual.id.split("-");
  let r = parseInt(Coordenada_Actual[0]);
  let c = parseInt(Coordenada_Actual[1]);

  let Coordenada_Blanco = Baldosa_Blanca.id.split("-");
  let rB = parseInt(Coordenada_Blanco[0]);
  let cB = parseInt(Coordenada_Blanco[1]);

  let Prueba_Izquierda = r == rB && cB == c - 1;
  let Prueba_Derecha = r == rB && cB == c + 1;

  let Prueba_Arriba = c == cB && rB == r - 1;
  let Prueba_Abajo = c == cB && rB == r + 1;

  let Es_Adyacente =
    Prueba_Izquierda || Prueba_Derecha || Prueba_Arriba || Prueba_Abajo;

  if (Es_Adyacente) {
    let Imagen_Actual = Baldosa_Actual.src;
    let Imagen_Blanca = Baldosa_Blanca.src;

    Baldosa_Actual.src = Imagen_Blanca;
    Baldosa_Blanca.src = Imagen_Actual;
    Turnos = Turnos + 1;
    document.getElementById("Turnos").innerText = Turnos;
  }
}
