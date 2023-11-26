import React from "react"
import styles from "./Day.module.css"
import {useDispatch} from "react-redux";
import {openTaskListAC, setTasksAC} from "../../redux/reducers/taskReducer";

const Day = ({dayNumber, dayName, tasks, key}) => {

    let dispatch = useDispatch()

    // const openTaskList = () => {
    //     const dayId = new Date().getTime() + dayNumber
    //     dispatch(openTaskListAC(dayId))
    //     const tasksForDay = tasks.filter((task) => task.dayId === dayId)
    //     dispatch(setTasksAC(tasksForDay))
    // }

    const openTaskList = () => {
        dispatch(openTaskListAC(), setTasksAC(tasks))
    }

    // let dayId = new Date().getTime() + dayNumber
    // console.log(dayId)

    return (
        <div className={styles.Day} onClick={ () => (openTaskList()) }>
            <div className={styles.dayNumber}>{dayNumber}
                <div className={styles.dayName}>{dayName}</div>
            </div>
        </div>
    )
}

export default Day