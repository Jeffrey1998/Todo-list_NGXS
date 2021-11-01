import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo } from '../actions/todo.action';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private store: Store) { }

  AddTodo(description: string){
    this.store.dispatch(new AddTodo({description: description, isCompleted: false}))
  }


  ngOnInit(): void {
  }

}
