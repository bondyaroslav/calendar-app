import React from "react"
import styles from "./Day.module.css"

const Day = ({dayNumber, dayName}) => {

    return (
        <div className={styles.Day}>
            <p className={styles.dayNumber}>{dayNumber}</p>
            <p className={styles.dayName}>{dayName}</p>
        </div>
    )
}

export default Day