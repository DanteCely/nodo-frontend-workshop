// Declaro
function persona(nombreIn, edadIn, emailIn) {
  const nombre = nombreIn;
  const edad = edadIn;
  const email = emailIn;

  // Declara
  const saluda = () => {
    console.log('Hola soy', nombre);
  };

  // Declara
  const miEdad = () => {
    console.log('Mi edad es', edad);
  };

  saluda();
  miEdad();
}

// Invoco
persona('Pepito', 21, 'pepito@gmail.com');
