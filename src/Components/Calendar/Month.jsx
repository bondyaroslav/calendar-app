import React from 'react'
import styles from "./Month.module.css"
import Day from "./Day"

const Month = ({ month }) => {
    return (
        <div className={styles.Month}>
            <div className={styles.wrapper}>
                {month[0].map((day, index) => (
                    <Day
                        key={index}
                        dayNumber={day.dayNumber}
                        dayName={day.dayName}
                        tasks={day.tasks}
                    />
                ))}
            </div>
        </div>
    )
}

export default Month