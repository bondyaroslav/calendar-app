import React, {useState} from "react";
import styles from "./TaskList.module.css"

const TaskList = () => {

    const tasks = []

    const addTask = (name) => {
        let newTask = {
            id: new Date().getTime(),
            name: name,
            status: false
        }
        tasks.push(newTask)
        console.log(tasks)
    }

    const deleteTask = () => {

    }

    return (
        <div className={styles.TaskList}>
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <div>current day</div>
                    <button>close</button>
                </div>
                <input type="text"/>
                <ul>

                </ul>
                <button onClick={() => {addTask("name")}}>add task</button>
            </div>
        </div>
    )
}

export default TaskList