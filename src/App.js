import React from "react"
import "./App.css"
import styles from "./Components/CurrentDate/CurrentDate.module.css"
import CurrentDate from "./Components/CurrentDate/CurrentDate"
import Calendar from "./Components/Calendar/Calendar"
import calendarState from "./dates"
import TaskList from "./Components/TaskList/TaskList";

const App = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <CurrentDate classname={styles.CurrentDate} currentDate={ calendarState.currentDate}/>
                <Calendar calendarState={calendarState}/>
                <div className={"taskListWrapper"}>
                    <TaskList/>
                </div>
            </div>
        </div>
    )
}

export default App