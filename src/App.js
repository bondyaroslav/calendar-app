import React, {useEffect, useState, Children, cloneElement} from "react";
import "./App.css"
import styles from "./Components/CurrentDate.module.css"
import CurrentDate from "./Components/CurrentDate";
import Calendar from "./Components/Calendar/Calendar";

const App = ({currentYear, currentDate, children}) => {
    console.log(currentYear)

    return (
        <div className="App">
            <div className="wrapper">
                <CurrentDate classname={styles.CurrentDate} currentDate={currentDate}/>
                <Calendar currentYear={currentYear} children={children}/>
                {/*<TaskList/>*/}
            </div>
        </div>
    );
}

export default App;