import React from "react";
import styles from "./Task.module.css";

const Task = (props) => {

    return (

        <li className={styles.li}>
            <input type="checkbox" checked={props.status}/>
            <p className={styles.p}>{props.name} </p>
            <p className={styles.p}>id {props.id}</p>
        </li>

    )
}

export default Task