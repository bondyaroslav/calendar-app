import "./App.css"
import React from "react";
import {useState} from "react";
import Calendar from "./Components/Calendar";
import TaskList from "./Components/TaskList";
import ThisDate from "./Components/ThisDate";

function App(props) {

    const [shown, setShown] = useState(false)

    const showTaskList = () => {
        if (shown >= true) {
            return 0
        } else {
            setShown(shown + true)
        }
    }

    return (
        <div className="App">
            <ThisDate year={props.store.state.year} month={props.store.state.month} day={props.store.state.day} />
            <div className="calendar-wrapper">
                <Calendar state={props.store.state} showTaskList={showTaskList}/>
            </div>
            {/*<button onClick={showTaskList}>show TL</button>*/}
            <TaskList shown={shown}/>
        </div>
    );
}

export default App;
