import React from "react";
import styles from "./CurrentDate.module.css"

const CurrentDate = (props) => {
    return (
        <div className={styles.ThisDate}>
            <p>Date: {props.year}.{props.month}.{props.day}</p>
        </div>
    )
}

export default CurrentDate