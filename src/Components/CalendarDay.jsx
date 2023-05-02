import React from "react";
import styles from "./CalendarDay.module.css"

const CalendarDay = ({dates, showTaskList, year, month}) => {

    return (
        <div className={styles.CalendarDay} onClick={showTaskList}>
            <p>Day {dates} </p>
        </div>
    )
}

export default CalendarDay