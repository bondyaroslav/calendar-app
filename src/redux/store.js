import {logDOM} from "@testing-library/react";

let store = {
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
        ],

        dates: [],
        weekDays: [],

        currentDate: {
            year: [],
            month: [],
            day: [],
        }
    },

    fillDatesInState() {
        let date = new Date()

        let thisYear = date.getFullYear()
        store.state.currentDate.year.push(thisYear)
        let thisMonth = date.getMonth()
        store.state.currentDate.month.push(thisMonth + 1)
        let nextMonth = thisMonth + 1

        let thisDay = date.getDate()
        store.state.currentDate.day.push(thisDay)

        let date1 = new Date(thisYear, thisMonth, 1)
        let date2 = new Date(thisYear, nextMonth, 1)
        let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);

        for (let i = 1; i <= date3; i++) {
            store.state.dates.push(i)
        }
    },

    getNameOfWeekDay() {

        const weekDays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]

        store.state.dates.forEach((day) => {
            const date = new Date(2023, 5, day)
            const dayOfWeek = weekDays[date.getDay()]
            console.log(`${day} - ${dayOfWeek}`)

             store.state.weekDays.push(dayOfWeek)
        });
        console.log(store.state.weekDays)
    },
}


export default store;