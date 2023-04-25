import React from "react";
import styles from "./ThisDate.module.css"

const ThisDate = (props) => {

    return (
        <div className={styles.ThisDate}>
            <p>Date: {props.year}.{props.month}.{props.day}</p>
        </div>
    )
}

export default ThisDate