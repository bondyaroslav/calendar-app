import React, {useState} from "react";
import styles from "./TaskList.module.css"
import Task from "./Task";
import store from "../redux/store";

const TaskList = (props) => {

    let tasksElement = props.tasks.map(task =>
        task.date.day === props.selectedDay &&
        <Task key={task.id} id={task.id} name={task.name} status={task.status} changeTaskStatus={props.changeTaskStatus}/>
    );

    //tasks
    const [name, setName] = useState("")
    const [id, setId] = useState(5)

    const addTaskName = (event) => {
        setName(event.target.value)
    }

    const addTaskId = () => {
        setId(id + 1)
    }

    const addNewTask = () => {
        if (name === "") {
            return 0
        } else {
            addTaskId()
            const newTask = {
                id,
                name,
                status: false,
                date: {
                    day: props.selectedDay,
                    month: 5,
                    year: 2023
                }
            }
            console.log(newTask)
            store.state.tasks.push(newTask) // props.setTasks([...props.tasks, newTask])
            setName("")
        }
    }

    if (props.shown === true) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>
                    <p>Task List</p>
                    <p>Day {props.selectedDay}</p>
                    <button className={styles.button} onClick={props.closeTaskList}>x</button>
                </div>
                <div>
                    <input placeholder={"enter new task"} value={name} onChange={ event => addTaskName(event) }/>
                    <button onClick={ () => {addNewTask()} }>add task</button>
                </div>
                <ul className={styles.ul}>
                    {tasksElement}
                </ul>
            </div>
        )
    } else return (<div></div>)
}

export default TaskList