import React from "react";
import styles from "./TaskList.module.css"

const TaskList = (props) => {

    let shown = props.isShown

    if (shown === true) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>
                    <p>Task List</p>
                    <button className={styles.button}>x</button>
                </div>
                <input placeholder={"enter new task"}/>
                <ul>
                    <li>Task</li>
                </ul>
            </div>
        )
    } else return (<div></div>)
}

export default TaskList