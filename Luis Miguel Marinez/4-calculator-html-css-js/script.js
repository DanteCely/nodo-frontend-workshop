class Calculadora {
  constructor(Dato_Operador_Pasado, Dato_Operador_Actual) {
    this.Dato_Operador_Pasado = Dato_Operador_Pasado;
    this.Dato_Operador_Actual = Dato_Operador_Actual;
    this.Limpiar();
  }

  Limpiar() {
    this.Operando_Actual = "";
    this.Operando_Pasado = "";
    this.Operacion = undefined;
  }
  Borrar() {
    this.Operando_Actual = this.Operando_Actual.toString().slice(0, -1);
  }
  Append_numero(Numero) {
    if (Numero === "." && this.Operando_Actual.includes(".")) return;
    this.Operando_Actual = this.Operando_Actual.toString() + Numero.toString();
  }
  Seleccionar_Operacion(Operador) {
    if (this.Operando_Actual === "") return;
    if (this.Operando_Pasado !== "") {
      this.Operar();
    }
    this.Operador = Operador;
    this.Operando_Pasado = this.Operando_Actual;
    this.Operando_Actual = "";
  }
  Operar() {
    let Resultado_calculo;
    const Pasado = parseFloat(this.Operando_Pasado);
    const Actual = parseFloat(this.Operando_Actual);
    if (isNaN(Pasado) || isNaN(Actual)) return;
    switch (this.Operador) {
      case "+":
        Resultado_calculo = Pasado + Actual;
        break;
      case "-":
        Resultado_calculo = Pasado - Actual;
        break;
      case "*":
        Resultado_calculo = Pasado * Actual;
        break;
      case "÷":
        Resultado_calculo = Pasado / Actual;
        break;
      default:
        return;
    }
    this.Operando_Actual = Resultado_calculo;
    this.Operador = undefined;
    this.Operando_Pasado = "";
  }

  Decimales_numeros(Numero) {
    const String_Numero = Numero.toString();
    const Digitos_Enteros = parseFloat(String_Numero.split(".")[0]);
    const Digitos_Decimales = String_Numero.split(".")[1];
    let Display_enteros;
    if (isNaN(Digitos_Enteros)) {
      Display_enteros = "";
    } else {
      Display_enteros = Digitos_Enteros.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (Digitos_Decimales != null) {
      return `${Display_enteros}.${Digitos_Decimales}`;
    } else {
      return Display_enteros;
    }
  }

  Actualizar_Pantalla() {
    this.Dato_Operador_Actual.innerText = this.Decimales_numeros(
      this.Operando_Actual
    );
    if (this.Operador != null) {
      this.Dato_Operador_Pasado.innerText = `${this.Decimales_numeros(
        this.Operando_Pasado
      )} ${this.Operador}`;
    } else {
      this.Dato_Operador_Pasado.innerText = "";
    }
  }
}

const Botones_Numeros = document.querySelectorAll("[Numero]");
const Botones_Operadores = document.querySelectorAll("[Operador]");
const Boton_Igual = document.querySelector("[Igual]");
const Boton_Delete = document.querySelector("[Delete]");
const Boton_All_Clear = document.querySelector("[All_Clear]");
const Dato_Operador_Pasado = document.querySelector("[Texto_Operador_Pasado]");
const Dato_Operador_Actual = document.querySelector("[Texto_Operador_Actual]");

const calculadora = new Calculadora(Dato_Operador_Pasado, Dato_Operador_Actual);

Botones_Numeros.forEach((button) => {
  button.addEventListener("click", () => {
    calculadora.Append_numero(button.innerText);
    calculadora.Actualizar_Pantalla();
  });
});

Botones_Operadores.forEach((button) => {
  button.addEventListener("click", () => {
    calculadora.Seleccionar_Operacion(button.innerText);
    calculadora.Actualizar_Pantalla();
  });
});

Boton_Igual.addEventListener("click", (button) => {
  calculadora.Operar();
  calculadora.Actualizar_Pantalla();
});

Boton_All_Clear.addEventListener("click", (button) => {
  calculadora.Limpiar();
  calculadora.Actualizar_Pantalla();
});

Boton_Delete.addEventListener("click", (button) => {
  calculadora.Borrar();
  calculadora.Actualizar_Pantalla();
});
