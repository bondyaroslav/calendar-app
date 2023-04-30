import React from "react";
import styles from "./TaskList.module.css"
import TaskListItem from "./TaskListItem";

const TaskList = (props) => {

     if (props.shown == true) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>
                    <p>Task List</p>
                    <button className={styles.button} onClick={props.closeTaskList}>x</button>
                </div>
                <input placeholder={"enter new task"}/>
                <TaskListItem task={props.task.id} />
            </div>
        )
     } else return (<div></div>)
}

export default TaskList