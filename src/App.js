import React from "react"
import "./App.css"
import styles from "./Components/CurrentDate/CurrentDate.module.css"
import CurrentDate from "./Components/CurrentDate/CurrentDate"
import Calendar from "./Components/Calendar/Calendar"
import calendarState from "./dates"

const App = () => {
    const currentDate = calendarState.currentDate

    return (
        <div className="App">
            <div className="wrapper">
                <CurrentDate classname={styles.CurrentDate} currentDate={currentDate}/>
                <Calendar calendarState={calendarState}/>
                {/*<TaskList/>*/}
            </div>
        </div>
    )
}

export default App