import React, {useEffect, useState, Children, cloneElement} from "react";
import "./App.css"
import styles from "./Components/CurrentDate.module.css"
import CurrentDate from "./Components/CurrentDate";
import Calendar from "./Components/Calendar/Calendar";
import Month from "./Components/Calendar/Month";

const App = ({currentYear, currentDate, children}) => {
    console.log(currentYear)

    let january = currentYear.January
    let february = currentYear.February
    let march = currentYear.March
    let april
    let may
    let june
    let july
    let august
    let september
    let october
    let november
    let december

    return (
        <div className="App">
            <div className="wrapper">
                <CurrentDate classname={styles.CurrentDate} currentDate={currentDate}/>
                <Calendar currentYear={currentYear}>
                    <Month month={january}/>
                    <Month month={february}/>
                    <Month month={march}/>
                </Calendar>
                {/*<TaskList/>*/}
            </div>
        </div>
    );
}

export default App;