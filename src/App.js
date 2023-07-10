import React from "react";
import "./App.css"
import {useState} from "react";
import Calendar from "./Components/Calendar";
import TaskList from "./Components/TaskList";
import CurrentDate from "./Components/CurrentDate";
import {rerenderAllTree} from "./index";

function App({state, tasksInState, currentDate}) {

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

    let [tasks, setTasks] = useState(tasksInState)

    const changeTaskStatus = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    status: !task.status
                };
            }
            return task
        });
        setTasks(updatedTasks)
    };

    return (
        <div className="App">
            <CurrentDate currentDate={currentDate}
            />
            <div className="calendar-wrapper">
                <Calendar state={state}
                          handleDateClick={handleDateClick}
                />
            </div>
            <TaskList shown={shown}
                      tasks={tasks}
                      setTasks={setTasks}
                      closeTaskList={closeTaskList}
                      selectedDay={selectedDay}
                      changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;