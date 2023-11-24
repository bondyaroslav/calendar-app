let calendarState = {
    currentDate: {
        day: null,
        month: null,
        year: null,
    },
    year: {
        yearName: 2023,
        months: {
            "january": [],
            "february": [],
            "march": [],
            "april": [],
            "may": [],
            "june": [],
            "july": [],
            "august": [],
            "september": [],
            "october": [],
            "november": [],
            "december": [],
        }
    }
}

let date = new Date()

const getCurrentDate = () => {
    calendarState.currentDate.day = date.getDate()
    calendarState.currentDate.month = date.getMonth() + 1
    calendarState.currentDate.year = date.getFullYear()
}
getCurrentDate()

// get name of day of the week
const getDayName = (year, month, day) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const date = new Date(year, month - 1, day - 1)
    return days[date.getDay()]
}

const createDay = (year, month, dayNumber) => {
    let day = {
        dayNumber,
        dayName: getDayName(year, month, dayNumber),
        tasks: {
            taskId: Number,
            taskName: String,
            taskStatus: Boolean //active or completed
        }
    }
    return day
}

// get amount of days in month
const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

const createMonth = (year, month) => {
    let daysInMonth = getDaysInMonth(year, month)
    let newMonth = []
    for (let i = 1; i <= daysInMonth; i++) {
        newMonth.push(createDay(year, month, i))
    }
    // console.log(newMonth)
    return newMonth
}

const createYear = (year) => {
    calendarState.year.months.january.push(createMonth(year, 1))
    calendarState.year.months.february.push(createMonth(year, 2))
    calendarState.year.months.march.push(createMonth(year, 3))
    calendarState.year.months.april.push(createMonth(year, 4))
    calendarState.year.months.may.push(createMonth(year, 5))
    calendarState.year.months.june.push(createMonth(year,6 ))
    calendarState.year.months.july.push(createMonth(year, 7))
    calendarState.year.months.august.push(createMonth(year, 8))
    calendarState.year.months.september.push(createMonth(year, 9))
    calendarState.year.months.october.push(createMonth(year, 10))
    calendarState.year.months.november.push(createMonth(year, 11))
    calendarState.year.months.december.push(createMonth(year, 12))
}
createYear(2023)

export default calendarState