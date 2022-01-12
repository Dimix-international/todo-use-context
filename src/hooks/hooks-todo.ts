import {useContext} from "react";
import {TodoContext} from "../context/todo-context";


export const useTodo = () => {
    const context = useContext(TodoContext);
    if(!context) throw new Error('useTodo must be used inside a Todo');
    return context
}