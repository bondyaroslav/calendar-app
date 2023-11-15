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

// get amount days in month
const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

const createMonth = (year, month) => {
    let daysInMonth = getDaysInMonth(year,month + 1)
    let newMonth = []
    for (let i = 1; i <= daysInMonth; i++) {
        newMonth.push(createDay(year, month, i))
    }
    // console.log(newMonth)
    return newMonth
}

const createYear = (year) => {
    calendarState.year.months.january.push(createMonth(0, year))
    calendarState.year.months.february.push(createMonth(1, year))
    calendarState.year.months.march.push(createMonth(2, year))
    calendarState.year.months.april.push(createMonth(3, year))
    calendarState.year.months.may.push(createMonth(4, year))
    calendarState.year.months.june.push(createMonth(5, year))
    calendarState.year.months.july.push(createMonth(6, year))
    calendarState.year.months.august.push(createMonth(7, year))
    calendarState.year.months.september.push(createMonth(8, year))
    calendarState.year.months.october.push(createMonth(9, year))
    calendarState.year.months.november.push(createMonth(10, year))
    calendarState.year.months.december.push(createMonth(11, year))
}
createYear(2023)


export default calendarState