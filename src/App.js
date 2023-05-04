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
        if (shown === true) {
            return 0
        } else {
            setShown(shown + true)
        }
    }

    const closeTaskList = () => {
        if (shown !== true) {
            setShown(shown - true)
        } else {
            return 0
        }
    }

    const [tasks, setTasks] = useState(state.calendarDay.tasks)

    const [selectedDate, setSelectedDate] = useState(null)
    const handleDateClick = (dates) => {
        setSelectedDate(dates)
        showTaskList()
    }

    return (
        <div className="App">
            <CurrentDate year={props.store.state.currentDate.year} month={props.store.state.currentDate.month} day={props.store.state.currentDate.day}/>
            <div className="calendar-wrapper">
                <Calendar state={props.store.state}
                          handleDateClick={handleDateClick}

                />
            </div>
            <TaskList shown={shown}
                      tasks={tasks}
                      selectedDate={selectedDate}
                      closeTaskList={closeTaskList}
            />
        </div>
    );
}

export default App;