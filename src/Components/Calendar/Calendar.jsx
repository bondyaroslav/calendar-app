import React from "react";
import styles from "./Calendar.module.css"
import Month from "./Month";

const Calendar = ({currentYear}) => {
    console.log("render")

    let january = currentYear.January
    let february = currentYear.February
    let march = currentYear.March
    let april
    let may
    let june
    let july
    let august
    let september
    let october
    let november
    let december

    return (
       <div className={styles.Calendar}>
           <Month month={january}/>
           <Month month={february}/>
           <Month month={march}/>
       </div>
    )
}

export default Calendar