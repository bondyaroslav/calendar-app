import React from "react";
import styles from "./CurrentDate.module.css"

const CurrentDate = ({currentDate}) => {

    return (
        <div className={styles.CurrentDate}>
            <p>Today: {currentDate.day}.{currentDate.month}.{currentDate.year}</p>
        </div>
    )
}

export default CurrentDate