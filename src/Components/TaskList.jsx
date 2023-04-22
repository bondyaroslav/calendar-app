import React from "react";
import styles from "./TaskList.module.css"

const TaskList = () => {
    return (
        <div className={styles.TaskList}>
            <p>Task List</p>
            <input placeholder={"enter new task"}/>
            <ul>
                <li>Task</li>
            </ul>
        </div>
    )
}

export default TaskList