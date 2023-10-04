import React from "react";
import styles from "./Day.module.css"

const Day = ({day}) => {
    return (
        <div className={styles.Day}>
            <p>Day {day}</p>
        </div>
    )
}

export default Day