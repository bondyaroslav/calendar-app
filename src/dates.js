export let dates = []

export let currentDate = {
    year: [],
    month: [],
    day: [],
}

const getCurrentDate = () => {
    let date = new Date()
    let thisYear = date.getFullYear()
    let thisMonth = date.getMonth()

    let thisDay = date.getDate()
    currentDate.year.push(thisYear)
    currentDate.month.push(thisMonth + 1)
    currentDate.day.push(thisDay)
}

getCurrentDate()

const getAmountOfDaysInCurrentMonth = () => {
    let date = new Date()
    let thisYear = date.getFullYear()
    let thisMonth = date.getMonth()
    let nextMonth = thisMonth + 1
    let date1 = new Date(thisYear, thisMonth, 1)
    let date2 = new Date(thisYear, nextMonth, 1)
    let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);

    for (let i = 1; i <= date3; i++) {
        dates.push(i)
    }
}

getAmountOfDaysInCurrentMonth()

let day = {
    year: 2023,
    month: 8,
    day: 15,
    tasks: []
}

export default dates