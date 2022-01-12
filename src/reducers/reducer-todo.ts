import {
    TodoActionsOperationType,
    TodoActionType
} from "../context/todo-context";


export type ItemTodoType = {
    id:string,
    text:string,
    completed:boolean
}

type TodoReducerReturnType = {
    [key in `${TodoActionsOperationType}`]: () => ItemTodoType []
}

export const todoReducer = (state: ItemTodoType [], action: TodoActionType): ItemTodoType [] => {

    const addTask = () => {
        return [...state, action.payload]
    }
    const deleteTask = () => {
        return state.filter(task => task.id !== action.payload.id)
    }
    const toggleTask = () => {
        return state.map(task => task.id === action.payload.id
            ? {...task, completed: !action.payload.completed}
            : task)
    }

    const actions = {
        'add-task': addTask,
        'delete-task': deleteTask,
        'toggle-task': toggleTask,
        'default': () => state,
    } as TodoReducerReturnType

    return (actions[action.type] || actions['default'])();

}