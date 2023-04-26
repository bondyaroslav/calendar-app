import React from "react";
import styles from "./TaskList.module.css"

const TaskList = (props) => {

    let activeDayId = props.activeDayId

    if (activeDayId) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>
                    <p>Task List</p>
                    <p>{activeDayId}</p>
                    <button className={styles.button}>x</button>
                </div>
                <input placeholder={"enter new task"}/>
                <ul>
                    <li className={styles.taskWrapper}>
                        <input type="checkbox"/><p>Task</p>
                    </li>
                </ul>
            </div>
        )
    } else return (<div></div>)
}

export default TaskList