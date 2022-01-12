import React from "react";
import {TodoItem} from "./TodoItem/TodoItem";
import styles from './TodoList.module.css'
import {ItemTodoType} from "../../../reducers/reducer-todo";

type TodoListType = {
    todos: ItemTodoType []
    toggleTodo:(todo: ItemTodoType) => void
    deleteTodo:(todo: ItemTodoType) => void
}
export const TodoList: React.FC<TodoListType> = React.memo((props) => {
    const {todos = [], toggleTodo, deleteTodo} = props;

    return (
        <div>
            <div className={styles.todoList}>
                <h3 className={styles.todoList__title}>TO-DOS</h3>
                <div className={styles.todoList__todos}>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            clickToToggle={() => toggleTodo(todo)}
                            clickToDelete={() => deleteTodo(todo)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
})