import React from "react";
import styles from "./CalendarDay.module.css"

const CalendarDay = ({dates, onDateClick, }) => {

    const handleDateClick = () => {
        onDateClick(dates)
    }

    return (
        <div className={styles.CalendarDay} onClick={handleDateClick}>
            <p>Day {dates} </p>
        </div>
    )
}

export default CalendarDay