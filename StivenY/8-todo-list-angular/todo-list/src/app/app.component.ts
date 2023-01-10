import { Component, OnInit } from '@angular/core';
import { TareaPendiente } from './tarea-pendiente';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private tareasService: TareasService) { }
  nombreTarea = ""
  public tareas: TareaPendiente[] = []
  guardarTarea() {
    const nuevaTarea = new TareaPendiente(this.nombreTarea);
    this.tareas.push(nuevaTarea);
    this.tareasService.guardarTareas(this.tareas);
    this.obtenerTareas();
    this.nombreTarea = "";
  }

  eliminarTarea(indice: number) {
    const confirma = confirm("¿Realmente quiere eliminar la tarea?");
    if (!confirma) {
      return;
    }
    this.tareas.splice(indice, 1);
    this.tareasService.guardarTareas(this.tareas);
  }
  cambiarEstadoDeTarea() {

    this.tareasService.guardarTareas(this.tareas);
  }
  obtenerTareas() {
    this.tareas = this.tareasService.obtenerTareas();
  }
  ngOnInit() {
    this.obtenerTareas();
  }
}
