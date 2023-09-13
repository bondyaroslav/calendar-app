import React from "react";
import styles from "./CalendarDay.module.css"

const CalendarDay = ({dates}) => {
    return (
        <div className={styles.CalendarDay}>
            <p>Day {dates} </p>
        </div>
    )
}

export default CalendarDay