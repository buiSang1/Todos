import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  todos = [
    {
    label: 'Sang',

   },
   {
    label: 'MRSang',

   }
  ]

  addTodo(newTodoLabel: any){
    var newTodo = {
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo: any){
   this.todos =  this.todos.filter(t => t.label !== todo.label);
  }
}


