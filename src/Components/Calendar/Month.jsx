import React from 'react';
import styles from "./Month.module.css"

const Month = ({day}) => {
    return (
        <div className={styles.MonthWrapper}>
            {day}
        </div>
    );
};

export default Month;