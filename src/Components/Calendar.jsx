import React from "react";
import styles from "./Calendar.module.css"
import CalendarDay from "./CalendarDay";

const Calendar = ({dates}) => {

    let datesElements = dates.map( date  =>
        <CalendarDay key={date}
                     dates={date}
        />)

    return (
        <div className={styles.Calendar}>
            <div className={styles.wrapper}>
                {datesElements}
            </div>
        </div>
    )
}

export default Calendar