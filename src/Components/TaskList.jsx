import React from "react";
import styles from "./TaskList.module.css"

const TaskList = (props) => {

    let shown = props.isShown

    if (shown === true) {
        return (
            <div className={styles.TaskList}>
                <p>Task List</p>
                <input placeholder={"enter new task"}/>
                <ul>
                    <li>Task</li>
                </ul>
            </div>
        )
    } else return (<div></div>)
}

export default TaskList