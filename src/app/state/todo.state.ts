import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Todo} from '../models/todo.model';
import {AddTodo, RemoveTodo, ToggleTodo} from '../actions/todo.action';

import {patch, append} from '@ngxs/store/operators'

export class TodoStateModel {
    todos: Todo[]
}

const sampleTodos: Todo[] = [
    { description: 'test 1', isCompleted: false},
    { description: 'test 2', isCompleted: false}
]

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todos: sampleTodos
    }
})



export class TodoState{
    @Selector()
    static getTodos(state: TodoStateModel): Todo[]{
        return state.todos
    }

    // @Action(AddTodo)
    // AddTodo({getState, patchState}: StateContext<TodoStateModel>, {payload}: AddTodo) {
    //     const state = getState();
    //     patchState({
    //         todos: [...state.todos,payload]
    //     })
    // }

    @Action(AddTodo)
    AddTodo(ctx: StateContext<TodoStateModel>, { payload }: AddTodo) {
        ctx.setState(
        patch({
            todos: append([payload])
        }));
    }

    @Action(RemoveTodo)
    RemoveTodo({getState, patchState}: StateContext<TodoStateModel>, { payload }: RemoveTodo) {
        patchState({
            todos: getState().todos.filter(a=> a.description != payload)
        })
    }

    @Action(ToggleTodo)
    toggleTodo(ctx: StateContext<TodoStateModel>, action: ToggleTodo) {
    const todo = action.payload;
    todo.isCompleted = !todo.isCompleted;
    ctx.patchState({
      todos: [...ctx.getState().todos]
    })
  }
}