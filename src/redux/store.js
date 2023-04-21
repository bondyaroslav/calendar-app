let store = {

    state: {
        dates: [],

    },

    getDaysInMonth() {
        let date1 = new Date(2023, 4, 1)
        let date2 = new Date(2023, 5, 1)
        let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);
        store.state.dates.push(date3 - 1)
    },

    fillDatesInState() {
        for (let i = 1; i < 30; i++) {
            store.state.dates.push(i)
        }
    },

    showDates() {
        console.log(store.state.dates)
    }

}

export default store;