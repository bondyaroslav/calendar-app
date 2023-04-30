let store = {
    state: {
        // calendarDay: {
        //
        // },

        tasks: [
            {id: 1, name: "task1", checked: false},
            // {id: 2, name: "task2", checked: true},
            // {id: 3, name: "task3", checked: false}
        ],

        dates: [],
        year: [],
        month: [],
        day: [],
    },



    fillDatesInState() {
        let date = new Date()

        let thisYear = date.getFullYear()
        store.state.year.push(thisYear)
        let thisMonth = date.getMonth()
        store.state.month.push(thisMonth + 1)
        let nextMonth = thisMonth + 1

        let thisDay = date.getDate()
        store.state.day.push(thisDay)

        let date1 = new Date(thisYear, thisMonth, 1)
        let date2 = new Date(thisYear, nextMonth, 1)
        let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);

        for (let i = 1; i <= date3; i++) {
            store.state.dates.push(i)
        }
        //this.setDates(thisYear, thisMonth, thisDay)
    },

    // setDates(thisYear, thisMonth, thisDay) {
    //     let currentDate = [
    //         {year: thisYear},
    //         {month: thisMonth},
    //         {day: thisDay},
    //
    //     ]
    // },


}


export default store;