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

    const closeTaskList = () => {
        if (shown >= true) {
            setShown(shown - true)
        } else {
            return 0
        }
    }

    const [tasks, setTasks] = useState( [
        {id: 1, name: "task1", status: false},
        {id: 2, name: "task2", status: false},
        {id: 3, name: "task3", status: false}
    ] )

    let taskElement = tasks.map( task => <TaskList id={task.id} name={task.name} status={task.status}/> )

    return (
        <div className="App">
            <ThisDate year={props.store.state.year} month={props.store.state.month} day={props.store.state.day} />
            <div className="calendar-wrapper">
                <Calendar state={props.store.state} showTaskList={showTaskList}/>
            </div>
            <TaskList shown={shown} closeTaskList={closeTaskList} task={taskElement}/>
        </div>
    );
}

export default App;

// let tasksElements = props.state.calendarDay.tasks.map( task =>
//     <TaskList id={task.id} name={task.name} status={task.status}/> )