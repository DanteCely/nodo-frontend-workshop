import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId =3
  todoList =[
    {
      id:1, 'task':"Task1"
    },
    {
      id:1, 'task':"Task2"
    }
  ]

  constructor() { }

  addTodo(taskName: any){
    this.todoList.push({"id": this.taskId++,'task':taskName})
  }

  deleteTodo(index: any){
    this.todoList.splice(index,1)
  }

}
