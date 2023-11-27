import React from "react"
import styles from "./Day.module.css"
import {useDispatch} from "react-redux";
import {openTaskListAC, setTasksAC} from "../../redux/reducers/taskReducer";

const Day = ({dayNumber, dayName, tasks}) => {
    let dispatch = useDispatch()

    const openTaskList = () => {
        dispatch(openTaskListAC(), setTasksAC(tasks))
    }

    return (
        <div className={styles.Day} onClick={ () => (openTaskList()) }>
            <div className={styles.dayNumber}>{dayNumber}
                <div className={styles.dayName}>{dayName}</div>
            </div>
        </div>
    )
}

export default Day