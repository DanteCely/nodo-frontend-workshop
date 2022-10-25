const carros = ['🚗', '🏍️', '🚗', '🚗', '🏍️', '🚗'];

const nuevosCarros = carros.map((value, index) => {
  if (value === '🏍️') {
    return '🚙';
  } else {
    return value;
  }
});

console.log(carros, carros.length);
console.log(nuevosCarros, nuevosCarros.length);
