import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Todo } from '../models/todo.model';
import { TodoState, TodoStateModel } from '../state/todo.state';
import { Observable} from 'rxjs';
import { RemoveTodo, ToggleTodo } from '../actions/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // todos$: Observable<Todo>
  @Select(TodoState.getTodos) todos$: Observable<Todo[]>

  constructor(private store: Store) {
    // this.todos$ = this.store.select(state => state.todos.todos)
   }

   delTodo(description: string){
     this.store.dispatch(new RemoveTodo(description))
   }

   toggleTodo(todo: Todo) {
    this.store.dispatch(new ToggleTodo(todo));
  }

  ngOnInit(): void {
  }
}
