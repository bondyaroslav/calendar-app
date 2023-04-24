import React, {useState} from "react";
import styles from "./CalendarDay.module.css"
import TaskList from "./TaskList";

const CalendarDay = (props) => {

    const [show, setShow] = useState(<TaskList isShown={false}/>)

    return (
        <div className={styles.CalendarDay}>
            <p onClick={ () => {setShow(show + true)} }>Day {props.dates} </p>
        </div>
    )
}

export default CalendarDay