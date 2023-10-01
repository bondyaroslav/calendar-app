import React, {Children, cloneElement, useEffect, useState} from "react";
import styles from "./Calendar.module.css"
import Month from "./Month";

const PAGE_WIDTH = 700

const Calendar = ({currentYear, children}) => {
    console.log("render")

    // let january = currentYear.January
    // let february = currentYear.February
    // let march = currentYear.March
    // let april
    // let may
    // let june
    // let july
    // let august
    // let september
    // let october
    // let november
    // let december

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

            console.log(newOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [])

    return (
        <div className={styles.Calendar}>
            <div className={styles.button} onClick={handleLeftClick}>prev</div>
            <div className={styles.window}>
                <div className={styles.allPagesContainer}
                     style={{
                         transform: `translateX(${offset}px)`
                     }}>
                    {pages}
                </div>
            </div>
            <div className={styles.button} onClick={handleRightClick}>next</div>
        </div>
    )
}

export default Calendar