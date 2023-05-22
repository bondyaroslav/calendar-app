import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const action = {type: "", payload: "?"}

const defaultState = {
    state: {
        tasks: [
            {
                id: 1,
                name: "task1",
                status: false,
                date: {
                    day: 1,
                    month: 5,
                    year: 2023
                }
            },
            {
                id: 2,
                name: "task2",
                status: true,
                date: {
                    day: 1,
                    month: 5,
                    year: 2023
                }
            },
            {
                id: 3,
                name: "task3",
                status: false,
                date: {
                    day: 2,
                    month: 5,
                    year: 2023
                }
            },
            {
                id: 4,
                name: "task4",
                status: false,
                date: {
                    day: 2,
                    month: 5,
                    year: 2023
                }
            },
        ],

        dates: [],

        currentDate: {
            year: [],
            month: [],
            day: [],
        }
    },
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));

const fillDatesInState = () => {
    let date = new Date()

    let thisYear = date.getFullYear()
    defaultState.state.currentDate.year.push(thisYear)
    let thisMonth = date.getMonth()
    defaultState.state.currentDate.month.push(thisMonth + 1)
    let nextMonth = thisMonth + 1

    let thisDay = date.getDate()
    defaultState.state.currentDate.day.push(thisDay)

    let date1 = new Date(thisYear, thisMonth, 1)
    let date2 = new Date(thisYear, nextMonth, 1)
    let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);

    for (let i = 1; i <= date3; i++) {
        defaultState.state.dates.push(i)
    }
}

export const rerenderAllTree = () => {
    root.render(
        <Provider store={store}>
            <App state={defaultState} tasksInState={defaultState.tasks} currentDate={defaultState.currentDate}/>
        </Provider>
    );
}

rerenderAllTree()

fillDatesInState()