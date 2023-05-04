import React from "react";
import styles from "./Task.module.css";

const Task = (props) => {

    return (
        <li className={styles.li}>
            <input type="checkbox" checked={props.status}/>
            <p>{props.name} </p>
            <p>id {props.id}</p>
        </li>

    )
}

export default Task