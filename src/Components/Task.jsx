import React from "react";
import styles from "./Task.module.css";

const Task = (props) => {

    return (
        <li className={styles.li}>
            <input type="checkbox" checked={props.status} onChange={ () => {} }/>
            <p>{props.name} </p>
            <p>{props.key}</p>
        </li>

    )
}

export default Task