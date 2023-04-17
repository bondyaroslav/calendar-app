let store = {

    state: {
        calendarDay: [
            {dayNumber: 1},
            {dayName: "Monday"}
        ],
        dates: [

        ],
    },

    // getAllDates() {
    //     let date = new Date()
    //     let today = date.getDate()
    //
    //     store.state.dates.push(today)
    // },

    dataCreator() {
        let date = new Date()
        console.log(date.getMonth())

        // for () {
        //
        // }
    }

}

export default store;