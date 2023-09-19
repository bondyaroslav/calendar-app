import React from "react";
import styles from "./Calendar.module.css"
import Month from "./Month";

const Calendar = ({currentYear}) => {
    console.log("render")

    let months = currentYear.map(
        month => <Month
            key={month} day={month}
        />
    )

    return (
        <div className={styles.Calendar}>
            <div className={styles.wrapper}>
                {/*{month}*/}
            </div>
        </div>
    )
}

export default Calendar