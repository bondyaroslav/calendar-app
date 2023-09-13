import React from "react";
import "./App.css"
import {useState} from "react";
import Calendar from "./Components/Calendar";
import TaskList from "./Components/TaskList";
import CurrentDate from "./Components/CurrentDate";
import {useDispatch, useSelector} from "react-redux";
import {addTaskActionCreator} from "./redux/taskReducer";

const App = ({dates, currentDate}) => {

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
                <Calendar dates={dates}/>
                {/*<TaskList/>*/}
            </div>
        </div>
    );
}

export default App;