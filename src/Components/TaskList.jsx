import React, {useState} from "react";
import styles from "./TaskList.module.css"
import Task from "./Task";
import {rerenderAllTree} from "../index";

const TaskList = ({tasks, selectedDay, setTasks, shown, closeTaskList, isChecked, changeTaskStatus}) => {

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    let tasksElement = tasks.map(task =>
        task.date.day === selectedDay &&
        <Task key={task.id}
              id={task.id}
              name={task.name}
              status={task.status}
              changeTaskStatus={changeTaskStatus}
              isChecked={isChecked}
              deleteTask={deleteTask}/>
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
                    day: selectedDay,
                    month: 5, //current month
                    year: 2023 //current year
                }
            }
            console.log(newTask)
            setTasks([...tasks, newTask])
            setName("")
        }
    }

    if (shown === true) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>
                    <p>Task List</p>
                    <p>Day {selectedDay}</p>
                    <button className={styles.button} onClick={closeTaskList}>x</button>
                </div>
                <div>
                    <input placeholder={"enter new task"} value={name} onChange={ event => addTaskName(event) }/>
                    <button onClick={ () => { addNewTask() } }>add task</button>
                </div>
                <ul className={styles.ul}>
                    {tasksElement}
                </ul>
            </div>
        )
    } else return (<div></div>)
}

export default TaskList