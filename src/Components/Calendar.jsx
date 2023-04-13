import React from "react";
import styles from "./Calendar.module.css"
import CalendarDay from "./CalendarDay";

const Calendar = () => {
    return (
        <div className={styles.Calendar}>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
            <CalendarDay/>
        </div>
    )
}

export default Calendar