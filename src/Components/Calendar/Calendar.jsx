import React, { useEffect, useState } from "react"
import styles from "./Calendar.module.css"
import Month from "./Month"

const Calendar = ({ calendarState }) => {
    const PAGE_WIDTH = 700
    const [months, setMonths] = useState(Object.values(calendarState.year.months))
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setMonths(Object.values(calendarState.year.months))
        setOffset(0)
    }, [calendarState])

    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        });
    };

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (months.length - 1))
            return Math.max(newOffset, maxOffset)
        });
    };

    return (
        <div className={styles.Calendar}>
            <button className={styles.button} onClick={handleLeftClick}>prev</button>

            <div className={styles.window}>
                <div
                    className={styles.allPagesContainer}
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {months.map((month, index) => (
                        <Month key={index} month={month} />
                    ))}
                </div>
            </div>

            <button className={styles.button} onClick={handleRightClick}>
                next
            </button>
        </div>
    )
}

export default Calendar
