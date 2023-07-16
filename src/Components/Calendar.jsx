import React from "react";
import styles from "./Calendar.module.css"
import CalendarDay from "./CalendarDay";

const Calendar = ({state, handleDateClick}) => {

    let datesElements = state.dates.map( date  =>
        <CalendarDay key={date}
                     dates={date}
                     handleDateClick={handleDateClick}
        />)

    return (
        <div className={styles.Calendar}>
            <div className={styles.wrapper}>{datesElements}</div>
        </div>
    )
}

export default Calendar