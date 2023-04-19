import React from "react";
import styles from "./Calendar.module.css"
import CalendarDay from "./CalendarDay";

const Calendar = (props) => {

    // const showDates = () => {
    //     for (let i = props.state.dates.length = 0; i < props.state.dates; i++) {
    //         <CalendarDay date={i}/>
    //     }
    // }


    let datesElements = props.state.dates.map(date => <CalendarDay dates={date.dates}/>)

    return (
        <div className={styles.Calendar}>
            <div className={styles.wrapper}>{datesElements}</div>
        </div>
    )
}

export default Calendar