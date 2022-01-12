import React, {ChangeEvent, FormEvent, useState} from "react";
import styles from './Input.module.css'
import {ItemTodoType} from "../../../reducers/reducer-todo";

type TodoInputType = {
    addTodo: (task:ItemTodoType) => void
}
export const TodoInput: React.FC<TodoInputType> = React.memo((props) => {
    const{addTodo} = props;
    const [todo, setTodo] = useState("");


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTodo(e.currentTarget.value);
    };

    const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTodo:ItemTodoType = {
            id: String(Math.random()),
            text: todo,
            completed: false,
        };

        addTodo(newTodo);

        setTodo("");
    };

    return (
        <div className={styles.todoInput}>
            <h3 className={styles.todoInput__title}>
                useCONTEXT + useREDUCER TO-DO LIST
            </h3>
            <form onSubmit={onSubmitHandler} className={styles.todoInput__form}>
                <input
                    className={styles.todoInput__input}
                    type="text"
                    value={todo}
                    placeholder="Enter a Todo..."
                    onChange={onChangeHandler}
                />
                <button className={styles.todoInput__submitBtn}>ADD</button>
            </form>
        </div>
    );
})