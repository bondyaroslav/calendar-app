import {getDaysInMonth} from "date-fns"

export let currentYear = {
    id: 2023,
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: [],
}

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

const getAmountOfDaysInCurrentYear = (year = 2023) => {
    const daysInJanuary = getDaysInMonth(new Date(year, 1))
    const daysInFebruary = getDaysInMonth(new Date(year, 2))
    const daysInMarch = getDaysInMonth(new Date(year, 3))
    const daysInApril = getDaysInMonth(new Date(year, 4))
    const daysInMay = getDaysInMonth(new Date(year, 5))
    const daysInJune = getDaysInMonth(new Date(year, 6))
    const daysInJuly = getDaysInMonth(new Date(year, 7))
    const daysInAugust = getDaysInMonth(new Date(year, 8))
    const daysInSeptember = getDaysInMonth(new Date(year, 9))
    const daysInOctober = getDaysInMonth(new Date(year, 10))
    const daysInNovember = getDaysInMonth(new Date(year, 11))
    const daysInDecember = getDaysInMonth(new Date(year, 12))

    for (let i = 1; i <= daysInJanuary; i++) {currentYear.January.push(i)}
    for (let i = 1; i <= daysInFebruary; i++) {currentYear.February.push(i)}
    for (let i = 1; i <= daysInMarch; i++) {currentYear.March.push(i)}
    for (let i = 1; i <= daysInApril; i++) {currentYear.April.push(i)}
    // for (let i = 1; i <= daysInJanuary; i++) {currentYear.January.push(i)}
    // for (let i = 1; i <= daysInJanuary; i++) {currentYear.January.push(i)}
    // for (let i = 1; i <= daysInJanuary; i++) {currentYear.January.push(i)}
    // for (let i = 1; i <= daysInJanuary; i++) {currentYear.January.push(i)}
    // for (let i = 1; i <= daysInJanuary; i++) {currentYear.January.push(i)}
    // for (let i = 1; i <= daysInJanuary; i++) {currentYear.January.push(i)}
    // for (let i = 1; i <= daysInJanuary; i++) {currentYear.January.push(i)}

}
getAmountOfDaysInCurrentYear(2023)

