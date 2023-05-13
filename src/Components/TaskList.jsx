import React from "react";
import styles from "./TaskList.module.css"
import Task from "./Task";

const TaskList = (props) => {

    let tasksElement = props.tasks.map(task =>
        task.date.day === props.selectedDay &&
        <Task key={task.id} id={task.id} name={task.name} status={task.status}/>
    );

    if (props.shown === true) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>
                    <p>Task List</p>
                    <p>Day {props.selectedDay}</p>
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


//