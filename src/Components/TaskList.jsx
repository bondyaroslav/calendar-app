import React from "react";
import styles from "./TaskList.module.css"
import Task from "./Task";
import task from "./Task";

const TaskList = (props) => {

    let tasksElement = props.tasks.map( task => <Task id={task.id} name={task.name} status={task.status} changeStatus={props.changeStatus}/> )

    if (props.shown == true) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>
                    <p>Task List</p>
                    <button className={styles.button} onClick={props.closeTaskList}>x</button>
                </div>
                <input placeholder={"enter new task"}/>
                <ul className={styles.ul}>
                    {tasksElement}
                </ul>
            </div>
        )
    } else return (<div></div>)
}

export default TaskList