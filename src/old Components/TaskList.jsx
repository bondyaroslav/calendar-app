import React, {useState} from "react";
import styles from "./TaskList.module.css"
import Task from "./Task";
import {addTaskActionCreator, deleteTaskActionCreator} from "../redux/taskReducer";
import {useDispatch} from "react-redux";

const TaskList = ({shown, tasks, selectedDay, closeTaskList}) => {

    const dispatch = useDispatch()

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        dispatch(deleteTaskActionCreator(id))
    }

    let tasksElement = tasks.map(task =>
        task.date.day === selectedDay &&
        <Task key={task.id}
              id={task.id}
              name={task.name}
              status={task.status}
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
        if (name !== "") {
            let newTask =
                {
                    id: addTaskId(),
                    name: name,
                    status: false,
                    date: {
                        day: 1,
                        month: 8,
                        year: 2023
                    }
                }
            dispatch(addTaskActionCreator(newTask))
        } else {
            return 0
        }
    }

    const handleAddTaskKeyPress = (event) => {
        if (event.key === "Enter") {
            addNewTask()
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
                    <input placeholder={"enter new task"}
                           value={name}
                           onChange={event => addTaskName(event)}
                           onKeyPress={event => handleAddTaskKeyPress(event)}
                    />
                    <button onClick={() => {
                        addNewTask()
                    }}>add task
                    </button>
                </div>
                <ul className={styles.ul}>
                    {tasksElement}
                </ul>
            </div>
        )
    } else return (<div></div>)
}

export default TaskList