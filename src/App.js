import "./App.css"
import Calendar from "./Components/Calendar";
import React from "react";
import TaskList from "./Components/TaskList";

function App(props) {

    return (
        <div className="App">
            <div>
                <p>Year: {props.store.state.year}</p>
            </div>
            <div className="wrapper">
                <Calendar state={props.store.state}/>
            </div>
            <TaskList isShown={false}/>
        </div>
    );
}

export default App;
