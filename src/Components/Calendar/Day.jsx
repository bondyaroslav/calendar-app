import React from "react";
import styles from "./Day.module.css"

const Day = ({dayNumber, dayName}) => {

    return (
        <div className={styles.Day}>
            <p>{dayName}</p>
            {dayNumber}
        </div>
    )
}

export default Day