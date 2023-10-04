import React from 'react';
import styles from "./Month.module.css"
import Day from "./Day";

const Month = ({month}) => {

    let days = month.map(day => <Day key={day} day={day}/> )

    return (
        <div className={styles.Month}>
            <div className={styles.wrapper}>
                {days}
            </div>
        </div>
    );
};

export default Month;