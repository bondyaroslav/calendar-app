import React from "react";
import "./App.css"
import CurrentDate from "./Components/CurrentDate";
import Calendar from "./Components/Calendar/Calendar";

const App = ({currentYear, currentDate}) => {

    console.log(currentYear)

    return (
        <div className="App">
            <div className="calendar-wrapper">
                <div className={"wrapper"}>
                    <CurrentDate currentDate={currentDate}/>
                    <div className={"button-wrapper"}>
                        <button>prev month</button>
                        <button>next month</button>
                    </div>
                </div>
                <Calendar currentYear={currentYear}/>
                {/*<TaskList/>*/}
            </div>
        </div>
    );
}

export default App;