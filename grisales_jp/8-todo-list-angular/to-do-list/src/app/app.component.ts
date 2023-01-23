import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-do-list';
  lista: any[]=[];
  agregarTarea(item:string) {

    this.lista.push({id:this.lista.length, name:item})
    console.log(this.lista);
  }

  }

