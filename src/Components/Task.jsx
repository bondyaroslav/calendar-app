import React from "react";
import styles from "./Task.module.css";

const Task = ({status, changeTaskStatus, id, name}) => {

    return (
        <li className={styles.li}>
            <input type="checkbox" checked={status} onChange={ event => changeTaskStatus(event.target.checked, id) }/>
            <p>{name} </p>
        </li>

    )
}

export default Task