import {ReactNode, useMemo, useReducer} from "react";
import {TodoContext} from "../context/todo-context";
import {todoReducer} from "../reducers/reducer-todo";


export const TodoProvider = ({children}: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(todoReducer, []);

    const todoContextValue = useMemo(() => ({state, dispatch}), [state])

    return (
        <TodoContext.Provider value={todoContextValue}>
            {children}
        </TodoContext.Provider>
    )

}