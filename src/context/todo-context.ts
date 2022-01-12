import React from "react";
import {ItemTodoType} from "../reducers/reducer-todo";

export enum TodoActionsOperationType {
    AddTask = 'add-task',
    DeleteTask = 'delete-task',
    ToggleTask = 'toggle-task',
    Default = 'default',
}


export type TodoActionType = {
    type: `${TodoActionsOperationType}`,
    payload: ItemTodoType/* | {id:string}*/
}

export type TodoDispatchType = (action: TodoActionType) => void
export type TodoContextType = { state: ItemTodoType []; dispatch: TodoDispatchType };

export const TodoContext = React.createContext<TodoContextType | undefined>(undefined);