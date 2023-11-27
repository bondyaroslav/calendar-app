import React from "react"
import styles from "./TaskList.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC, closeTaskListAC, deleteTaskAC} from "../../redux/reducers/taskReducer";

const TaskList = () => {
    const dispatch = useDispatch()
    const isShowing = useSelector(state => state.taskList.isShowing)
    const initialTasks = useSelector(state => state.taskList.tasks)

    const addTask = (name) => {
        let newTask = {
            id: new Date().getTime(),
            name: name,
            status: false
        }
        dispatch(addTaskAC(newTask))
        console.log(initialTasks)
    }

    const deleteTask = (taskId) => {
        dispatch(deleteTaskAC(taskId))
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
                        <button onClick={() => {closeTaskList()}}>close</button>
                    </div>
                    <input type="text"/>
                    <ul>
                        {initialTasks.map( task => <li key={task.id}>{task.name} - {task.id}<button onClick={ () => {deleteTask(task.id)} }>x</button></li>)}
                    </ul>
                    <button onClick={() => {addTask("name")}}>add task</button>
                </div>
            </div>
        )
    } else return null
}

export default TaskList