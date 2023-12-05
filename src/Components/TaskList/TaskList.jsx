import React, {useState} from "react"
import styles from "./TaskList.module.css"
import {useDispatch, useSelector} from "react-redux"
import {addTaskAC, closeTaskListAC, deleteTaskAC, toggleTaskStatusAC} from "../../redux/reducers/taskReducer"

const TaskList = () => {
    const dispatch = useDispatch()
    const isShowing = useSelector(state => state.taskList.isShowing)
    // const initialTasks = useSelector(state => state.taskList.tasks)
    const taskLists = useSelector(state => state.taskList.taskLists)

    const [taskName, setTaskName] = useState("")

    const addTask = (name) => {
        if (name === "") {
            return 0
        } else {
            let newTask = {
                id: new Date().getTime(),
                name: name,
                status: false
            }
            dispatch(addTaskAC(newTask))
            setTaskName("")
        }
    }

    const deleteTask = (taskId) => {
        dispatch(deleteTaskAC(taskId))
    }

    const toggleTaskStatus = (taskId) => {
        dispatch(toggleTaskStatusAC(taskId))
    }

    const closeTaskList = () => {
        dispatch(closeTaskListAC())
    }

    if (isShowing === true) {
        return (
            taskLists.map(taskList => (
                <div className={styles.TaskList} key={taskList.id}>
                    <div className={styles.wrapper}>
                        <p>{taskList.id}</p>
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
                            {taskList.tasks.map( task =>
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
            ))
        )
    } else return null
}

export default TaskList