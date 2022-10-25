// Declaro
class Persona {
  constructor(nombre, edad, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }

  // Declara
  saluda = () => {
    console.log('Yo soy', this.nombre);
  };

  // Declara
  miEdad = () => {
    console.log('Mi edad es', this.edad);
  };

  // Declara
  enviarEmail = () => {
    console.log('Mi correo es', this.email);
  };
}

// Instanciar
const individuo = new Persona('Groot', 28, 'pepito@gmail.com');

// Invocar os métodos
individuo.saluda();
individuo.miEdad();

console.log('Yo soy', individuo.nombre);

console.log(individuo.saluda(), individuo.miEdad());
