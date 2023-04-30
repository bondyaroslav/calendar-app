import React from "react";
import styles from "./CalendarDay.module.css"

const CalendarDay = (props) => {

    return (
        <div className={styles.CalendarDay} onClick={props.showTaskList}>
            <p>Day {props.dates} </p>
        </div>
    )
}

export default CalendarDay