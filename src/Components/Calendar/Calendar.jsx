import React, { useState } from "react"
import styles from "./Calendar.module.css"
import Month from "./Month"

const Calendar = ({ calendarState }) => {
    const PAGE_WIDTH = 700
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const [offset, setOffset] = useState(0)
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0)
    const currentMonth = months[currentMonthIndex]

    const handleLeftClick = () => {
        const newIndex = Math.max(currentMonthIndex - 1, 0);
        setOffset((currentOffset) => Math.min(currentOffset + PAGE_WIDTH, 0));
        setCurrentMonthIndex(newIndex)
    }

    const handleRightClick = () => {
        const newIndex = Math.min(currentMonthIndex + 1, months.length - 1)
        const maxOffset = -(PAGE_WIDTH * (months.length - 1))
        setOffset((currentOffset) => Math.max(currentOffset - PAGE_WIDTH, maxOffset))
        setCurrentMonthIndex(newIndex)
    }

    return (
        <div className={styles.Calendar}>
            <h2 className={styles.currentMonth}>{currentMonth}</h2>
            <div className={styles.wrapper}>
                <button className={styles.button} onClick={handleLeftClick}>
                    prev
                </button>

                <div className={styles.window}>
                    <div
                        className={styles.allPagesContainer}
                        style={{
                            transform: `translateX(${offset}px)`,
                            display: "flex",
                            transition: "transform 0.3s ease-in-out",
                            width: `${PAGE_WIDTH * months.length}px`,
                        }}
                    >
                        {months.map((month, index) => (
                            <Month key={index} month={calendarState.year.months[month.toLowerCase()]} />
                        ))}
                    </div>
                </div>

                <button className={styles.button} onClick={handleRightClick}>
                    next
                </button>
            </div>
        </div>
    )
}

export default Calendar
