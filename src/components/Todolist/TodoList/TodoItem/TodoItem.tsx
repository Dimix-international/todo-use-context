import React from "react";
import styles from './Item.module.css'

type TodoItem = {
    text: string
    completed: boolean
    clickToToggle: () => void
    clickToDelete: () => void
}
export const TodoItem: React.FC<TodoItem> = React.memo((props) => {
    const {text, completed, clickToToggle, clickToDelete} = props;

    return (
        <div className={styles.todoItem}>
      <span
          className={styles.todoItem__text}
          style={{color: completed ? "green" : "red"}}
      >
        {text}
      </span>
            <div>
                <button className={styles.todoItem__toggleBtn}
                        onClick={clickToToggle}>
                    TOGGLE
                </button>
                <button className={styles.todoItem__deleteBtn}
                        onClick={clickToDelete}>
                    DELETE
                </button>
            </div>
        </div>
    )
})