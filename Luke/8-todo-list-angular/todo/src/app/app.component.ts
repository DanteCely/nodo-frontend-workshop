import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';  //Default is 'all' but can be the others.

  allItems = [
    { description: 'Eat', done: true },
    { description: 'Sleep', done: false },
    { description: 'Play', done: false },
    { description: 'Laugh', done: false },
  ];

  get items(){
    if(this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string){
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item){
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
