import React from "react";
import "./App.css"
import {useState} from "react";
import Calendar from "./Components/Calendar";
import TaskList from "./Components/TaskList";
import CurrentDate from "./Components/CurrentDate";

function App(props) {

    let state = props.store.state

    const [shown, setShown] = useState(false)
    const showTaskList = () => {
        if (shown === false) {
            setShown(true)
        } else {
            return 0
        }
    }
    const closeTaskList = () => {
        if (shown === true) {
            setShown(false)
        } else {
            return 0
        }
    }

    const [selectedDay, setSelectedDay] = useState(null)

    const chooseSelectDay = (dates) => {
        setSelectedDay(dates)
    }

    const handleDateClick = (dates) => {
        showTaskList()
        chooseSelectDay(dates)
    }

    const [tasks, setTasks] = useState(state.tasks)
    const [status, setStatus] = useState()

    const changeTaskStatus = (value, id) => {
        setStatus(!status)
    }

    // const handleAddNewTask = (newTask) => {
    //     setTasks(newTask)
    // }

    return (
        <div className="App">
            <CurrentDate year={props.store.state.currentDate.year}
                         month={props.store.state.currentDate.month}
                         day={props.store.state.currentDate.day}
            />
            <div className="calendar-wrapper">
                <Calendar state={props.store.state}
                          handleDateClick={handleDateClick}

                />
            </div>
            <TaskList shown={shown}
                      tasks={tasks}
                      setTasks={setTasks}
                      closeTaskList={closeTaskList}
                      selectedDay={selectedDay}
                      currentDate={props.store.state.currentDate}
                      changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;