import React, {useState} from "react"
import styles from "./TaskList.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC, closeTaskListAC, deleteTaskAC, toggleTaskStatusAC} from "../../redux/reducers/taskReducer";

const TaskList = () => {
    const dispatch = useDispatch()
    const isShowing = useSelector(state => state.taskList.isShowing)
    const initialTasks = useSelector(state => state.taskList.tasks)

    const [taskName, setTaskName] = useState("")
    const [taskStatus, setTaskStatus] = useState(false)

    const addTask = (name) => {
        if (name === "") {
            return 0
        } else {
            let newTask = {
                id: new Date().getTime(),
                name: name,
                status: taskStatus
            }
            dispatch(addTaskAC(newTask))
            setTaskName("")
            console.log(initialTasks)
        }
    }

    const deleteTask = (taskId) => {
        dispatch(deleteTaskAC(taskId))
    }

    const toggleTaskStatus = (taskId) => {
        dispatch(toggleTaskStatusAC(taskId))
        console.log(initialTasks)
    }

    const closeTaskList = () => {
        dispatch(closeTaskListAC())
    }

    if (isShowing === true) {
        return (
            <div className={styles.TaskList}>
                <div className={styles.wrapper}>

                    <div className={styles.headerWrapper}>
                        <div>current day</div>
                        <button onClick={ () => {closeTaskList()} }>close</button>
                    </div>

                    <input
                        type="text"
                        onInput={event => setTaskName(event.target.value)}
                        value={taskName}
                    />

                    <ul>
                        {initialTasks.map( task =>
                            <li key={task.id}>
                                {task.name}-{task.id}
                                <input type="checkbox" onChange={ () => {toggleTaskStatus(task.id)} }/>
                                <button onClick={ () => {deleteTask(task.id)} }>x</button>
                            </li>
                        )}
                    </ul>

                    <button onClick={ () => {addTask(taskName)} }>add task</button>
                </div>
            </div>
        )
    } else return null
}

export default TaskList