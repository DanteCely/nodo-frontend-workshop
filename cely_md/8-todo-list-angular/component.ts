import { Component } from '@angular/core';

@Component({
  selector: 'car',
  template: `
    <h2>{{ color }}</h2>
    <p>Tipo de carro electrico! {{ electrico }}</p>
    <hello-world></hello-world>
  `,
  styles: './styles.scss',
})
export class CarroComponent {
  private color: '#FFF';
  private electrico: true;

  constructor(color, electrico) {
    this.color = color;
    this.electrico = electrico;
  }

  prender() {
    return 'Encendido el carro ' + this.color;
  }
}
