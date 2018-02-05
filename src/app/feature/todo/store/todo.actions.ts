import { Action } from "@ngrx/store";
import { Todo } from "../todo";

export const ADD_TODO = "[TODO] add";
export const REMOVE_TODO = "[TODO] remove";

export class AddTodo implements Action {
    readonly type = ADD_TODO;

    constructor (public payload: AddTodoPayload) {}
}

export interface AddTodoPayload {
    todo: Todo;
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;

    constructor (public payload: RemoveTodoPayload) {}
}

export interface RemoveTodoPayload {
    todoId: number;
}

export type Actions = AddTodo
| RemoveTodo;