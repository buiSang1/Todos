import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { name } from './models/model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  // todos : name[] = [];
  // todoForm = this.fb.group({
  //   item : ['', Validators.required]
  //   });

  // constructor(private fb: FormBuilder){}
  // ngOnInit( ){

  // }
  // addTodo(){
  //   this.todos.push({
  //     description: this.todoForm.value.item as string,
  //     done: false
  //   })
  //   this.todoForm.reset();
  // }

  // deleteTodo(i: number){
  //   this .todos.splice(i,1);
  // }
}


