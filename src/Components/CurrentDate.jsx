import React from "react";
import styles from "./CurrentDate.module.css"

const CurrentDate = ({currentDate}) => {
    return (
        <div className={styles.ThisDate}>
            <p>Date: {currentDate.year}.{currentDate.month}.{currentDate.day}</p>
        </div>
    )
}

export default CurrentDate