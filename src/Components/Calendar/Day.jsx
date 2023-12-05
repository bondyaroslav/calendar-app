import React from "react"
import styles from "./Day.module.css"
import {useDispatch} from "react-redux"
import {createNewTaskListAC, initialState, openTaskListAC} from "../../redux/reducers/taskReducer"

const Day = ({dayNumber, dayName, tasks}) => {

    let dispatch = useDispatch()

    const dayId = new Date().getTime() + dayNumber

    const createTaskList = () => {
        const newTaskList = {
            id: dayId,
            tasks: tasks
        }
        // dispatch(createNewTaskListAC(newTaskList))
        initialState.taskLists.push(newTaskList)
        console.log(initialState.taskLists)
    }

    const onOpenTaskList = () => {
        dispatch(openTaskListAC())
        createTaskList()    
    }

    return (
        <div className={styles.Day} onClick={ () => (onOpenTaskList()) }>
            <div className={styles.dayNumber}>{dayNumber}
                <div className={styles.dayName}>{dayName}</div>
                <button onClick={ () => {console.log(dayId)}}>show id</button>
            </div>
        </div>
    )
}

export default Day