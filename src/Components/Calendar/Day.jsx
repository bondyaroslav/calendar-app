import React from "react"
import styles from "./Day.module.css"

const Day = ({dayNumber, dayName}) => {
    return (
        <div className={styles.Day}>
            <div className={styles.dayNumber}>{dayNumber}
                <div className={styles.dayName}>{dayName}</div>
            </div>
        </div>
    )
}

export default Day