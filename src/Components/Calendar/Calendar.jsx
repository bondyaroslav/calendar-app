import React, {cloneElement, useEffect, useState} from "react";
import styles from "./Calendar.module.css"
import Month from "./Month";

const PAGE_WIDTH = 700

const Calendar = ({calendarState}) => {
    // const [pages, setPages] = useState([])
    // const [offset, setOffset] = useState(0)
    //
    // const handleLeftClick = () => {
    //     setOffset((currentOffset) => {
    //         const newOffset = currentOffset + PAGE_WIDTH
    //         // console.log(newOffset)
    //         return Math.min(newOffset, 0)
    //     })
    // }
    // const handleRightClick = () => {
    //     setOffset((currentOffset) => {
    //         const newOffset = currentOffset - PAGE_WIDTH
    //
    //         const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
    //
    //         // console.log(newOffset)
    //         return Math.max(newOffset, maxOffset)
    //     })
    // }
    //
    // useEffect(() => {
    //     setPages(
    //         Children.map(children, child => {
    //             return cloneElement(child, {
    //                 style: {
    //                     height: "100%",
    //                     minWidth: `${PAGE_WIDTH}px`,
    //                     maxWidth: `${PAGE_WIDTH}px`,
    //                 }
    //             })
    //         })
    //     )
    // }, [])

    console.log(calendarState.year)

    return (
        <div className={styles.Calendar}>
            <Month month={calendarState.year.months.january}/>
            <Month month={calendarState.year.months.february}/>
            <Month month={calendarState.year.months.march}/>
            {/*<Month month={calendarState.year.months.november}/>*/}
            {/*<Month month={calendarState.year.months.november}/>*/}
            {/*<Month month={calendarState.year.months.november}/>*/}
            {/*<Month month={calendarState.year.months.november}/>*/}
            {/*<Month month={calendarState.year.months.november}/>*/}
            {/*<Month month={calendarState.year.months.november}/>*/}
            {/*<Month month={calendarState.year.months.november}/>*/}
            {/*<Month month={calendarState.year.months.november}/>*/}
            {/*<Month month={calendarState.year.months.november}/>*/}


            {/*<button className={styles.button} onClick={handleLeftClick}>prev</button>*/}
            {/*<div className={styles.window}>*/}
            {/*    <div className={styles.allPagesContainer}*/}
            {/*         style={{*/}
            {/*             transform: `translateX(${offset}px)`*/}
            {/*         }}>*/}
            {/*        {pages}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<button className={styles.button} onClick={handleRightClick}>next</button>*/}
        </div>
    )
}

export default Calendar