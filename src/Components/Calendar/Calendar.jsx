import React from "react";
import styles from "./Calendar.module.css"
import Month from "./Month";

const Calendar = ({currentYear}) => {
    console.log("render")

    let months = currentYear.January.map(month =>  <Month key={month} day   ={month}/> )

    return (
       <div className={styles.Calendar}>
           <div className={styles.wrapper}>
               {months}
           </div>
       </div>
    )
}

export default Calendar