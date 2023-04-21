import React from "react";
import styles from "./Calendar.module.css"
import CalendarDay from "./CalendarDay";

const Calendar = (props) => {

    let state = props.state

    let datesElements = state.dates.map( date => {
        return <CalendarDay dates={state.dates}/>

    } )

    return (
        <div className={styles.Calendar}>
            <div className={styles.wrapper}>{datesElements}</div>
        </div>
    )
}

export default Calendar