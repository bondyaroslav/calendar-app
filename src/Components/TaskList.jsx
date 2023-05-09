import React from "react";
import styles from "./TaskList.module.css"
import Task from "./Task";

const TaskList = (props) => {

    // const dayId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let taskId
    let tasksId = props.tasks.map( task => taskId = task.id )

    const filteredTasks = tasksId.filter(id => id === props.selectedDay);
    console.log(filteredTasks);

    let tasksElement = props.tasks.map(task =>
        <Task key={task.id} id={task.id} name={task.name} status={task.status}/>
    );



    if (props.shown == true) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>
                    <p>Task List</p>
                    <p>{props.selectedDay}</p>
                    <button className={styles.button} onClick={props.closeTaskList}>x</button>
                </div>
                <input placeholder={"enter new task"}/>
                <ul className={styles.ul}>
                    {/*{tasksElement}*/}
                    {filteredTasks}
                </ul>
            </div>
        )
    } else return (<div></div>)
}

export default TaskList


//