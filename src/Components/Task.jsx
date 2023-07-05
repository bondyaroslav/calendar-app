import React from "react";
import styles from "./Task.module.css";

const Task = ({status, deleteTask, changeTaskStatus, id, name}) => {

    return (
        <li className={styles.li}>
            <input type="checkbox" checked={status} onChange={ event => changeTaskStatus(event.target.checked, id) }/>
            <p>{name} </p>
            <button className={styles.deleteButton} onClick={ () => { deleteTask(id) } }>x</button>
        </li>

    )
}

export default Task