import React from "react";
import styles from "./CalendarDay.module.css"

const CalendarDay = ({dates, handleDateClick}) => {

    // const onDateClick = () => {
    //     handleDateClick()
    //     console.log(dates)
    // }

    return (
        <div className={styles.CalendarDay} onClick={ () => {handleDateClick(dates)} }>
            <p>Day {dates} </p>
        </div>
    )
}

export default CalendarDay