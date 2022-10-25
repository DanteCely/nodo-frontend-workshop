// const sentencia = false !== true;

// console.log('¿Es verdad?', sentencia);

// const operado = 68498161 % 2;
// console.log('resultado', operado);

// const entrenar = false;
// const dormir = true;
// const voley = false;
// const basquet = true;

// if ((dormir && entrenar) || !(voley || basquet)) {
//   console.log('Si');
// } else {
//   console.log('No');
// }

// lunes martes miercoles jueves viernes sabado domingo

// const dia = 'sabado';

// if (dia === 'lunes') {
//   // ación
//   console.log('Trabajo');
// } else if (dia === 'martes') {
//   // ación
//   console.log('Trabajo x2');
// } else if (dia === 'miercoles') {
//   // ación
//   console.log('Tesis');
// } else if (dia === 'jueves') {
//   // ación
//   console.log('Estudio');
// } else if (dia === 'viernes') {
//   // ación
//   console.log('Farreo');
// } else if (dia === 'sabado') {
//   // ación
//   console.log('Aseo');
// } else {
//   // ación
//   console.log('Descanso');
// }

const dia2 = 'miercoles';

switch (dia2) {
  case 'lunes': {
    // ación
    console.log('Trabajo');
    break;
  }

  case 'martes': {
    // ación
    console.log(' x2');
    break;
  }

  case 'miercoles': {
    // ación
    console.log('Tesis');
    break;
  }

  case 'jueves': {
    // ación
    console.log('Estudio');
    break;
  }

  case 'viernes': {
    // ación
    console.log('Farreo');
    break;
  }

  case 'sabado': {
    // ación
    console.log('Aseo');
    break;
  }

  default: {
    // ación
    console.log('Descanso');
  }
}
