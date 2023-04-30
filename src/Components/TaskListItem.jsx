import React from "react";
import styles from "./TaskList.module.css";

const TaskListItem = ({task}) => {

    console.log(task)

    return (
        <ul>
            <li className={styles.taskWrapper}>
                <input type="checkbox"/>
                <p>{task.id}</p>
                <p>{task.name}</p>
            </li>
        </ul>
    )
}

export default TaskListItem