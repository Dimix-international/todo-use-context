import {TodoInput} from "./TodoInput/TodoInput";
import {TodoList} from "./TodoList/TodoList";
import {useTodo} from "../../hooks/hooks-todo";
import {ItemTodoType} from "../../reducers/reducer-todo";
import {useCallback} from "react";
import styles from './AppTodo.module.css'

export const AppTodo = () => {
    const {state, dispatch} = useTodo();

    const addTaskHandler = useCallback((task: ItemTodoType) => {
        dispatch({type: 'add-task', payload:task})
    }, []);

    const deleteTaskHandler = useCallback((task: ItemTodoType) => {
        dispatch({type: 'delete-task', payload:task})
    }, []);

    const toggleTaskHandler = useCallback((task: ItemTodoType) => {
        dispatch({type: 'toggle-task', payload:task})
    }, []);

    return (
        <div className={styles.todoApp}>
            <TodoInput addTodo={addTaskHandler}/>
            <TodoList
                todos={state}
                deleteTodo={deleteTaskHandler}
                toggleTodo={toggleTaskHandler}
            />
        </div>
    )
}