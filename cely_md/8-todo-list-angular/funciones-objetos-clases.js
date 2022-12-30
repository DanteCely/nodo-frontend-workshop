// Funciones
function crearCarro(color, electrico) {
  this.color = color;
  this.electrico = electrico;
  this.imprimir = function () {
    console.log(this);
  };

  return this;
}

// this.placa = 'ZZZ111';

// const carritoFun = crearCarro('#FFF', false);

// carritoFun.imprimir();
// console.log(carritoFun.placa);

// console.log(carritoFun.color);
// console.log(this.color);

// Objetos
const carroObj1 = {
  color: '#000000',
  electrico: true,
  prender: function () {
    return `Encendido ${this.color}`;
  },
  cambiarColor: function (nuevoColor) {
    this.color = nuevoColor;
  },
  imprimir: function () {
    console.log(this);
  },
};

// carroObj1.imprimir();
// carroObj1.addPlate = function (plate) {
//   this.placa = plate;

//   return `Cambio exitoso, su placa es ${this.placa}`;
// };

// console.log(carroObj1.addPlate('ABC123'));
// carroObj1.imprimir();

// carroObj1.cambiarColor('red');
// console.log(carroObj1);

const carroObj2 = {
  color: 'red',
  electrico: true,
  prender: function () {
    return 'mesaje respuesta';
  },
};

// clase
class Carro {
  // atributos privado
  _color = '#fff';
  _electrico = false;

  // contructor
  constructor(color, electrico) {
    this._color = color;
    this._electrico = electrico;
  }

  prender() {
    return 'Encendido el carro ' + this._color;
  }

  imprimir() {
    console.log(this);
  }
}

const carro1 = new Carro('red', true);
const carro2 = new Carro('blue', false);

// console.log('Desde Clase 1', carro1.prender());
// console.log('Desde Clase 2', carro2.prender());

// carro1.imprimir();
// carro1.addPlate = function (plate) {
//   this.placa = plate;

//   return `Cambio exitoso, su placa es ${this.placa}`;
// };

// console.log(carro1.addPlate('ABC123'));
// carro1.imprimir();
