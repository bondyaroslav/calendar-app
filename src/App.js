import React from "react";
import "./App.css"
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
            getTaskId()
        }
    }

    const closeTaskList = () => {
        if (shown >= true) {
            setShown(shown - true)
        } else {
            return 0
        }
    }

    const getTaskId = () => {
        let date =  props.dates + props.month + props.year
        setId(id + date)
    }



    const [id, setId] = useState()

    const [status, setStatus] = useState()

    const changeStatus = () => {
        if (status == true) {
            setStatus(status - true)
            console.log(status)
        } else {
            setStatus(status + true)
            console.log(status)
        }
    }


    const [tasks, setTasks] = useState([
            {id: 1, name: "task1", status: true},
            {id: 2, name: "task2", status: true},
            {id: 3, name: "task3", status: false}
        ])

    return (
        <div className="App">
            <ThisDate year={props.store.state.year} month={props.store.state.month} day={props.store.state.day}/>
            <div className="calendar-wrapper">
                <Calendar state={props.store.state} showTaskList={showTaskList}/>
            </div>
            <TaskList shown={shown} closeTaskList={closeTaskList} changeStatus={changeStatus} tasks={tasks}/>
        </div>
    );
}

export default App;