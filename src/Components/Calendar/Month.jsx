import React from 'react';
import styles from "./Month.module.css"
import Day from "./Day";

const Month = ({month}) => {
    console.log(month)
    const days = month[0].map((day) => (
        <Day key={day.dayNumber} dayNumber={day.dayNumber} dayName={day.dayName}/>
    ))

    return (
        <div className={styles.Month}>
            <div className={styles.wrapper}>
                {days}
            </div>
        </div>
    )
}

export default Month;