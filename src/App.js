import React, {useEffect, useState, Children, cloneElement} from "react";
import "./App.css"
import styles from "./Components/CurrentDate.module.css"
import CurrentDate from "./Components/CurrentDate";
import Calendar from "./Components/Calendar/Calendar";

const App = ({currentYear, currentDate, children}) => {
    console.log(currentYear)

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: "100%",
                        maxWidth: "100%"
                    }
                })
            })

        )
    }, []);

    const handleLeftArrowClick = () => {console.log("left")
        setOffset((currentOffset) => {
            const newOffset = currentOffset - 700
            console.log(newOffset)
            return newOffset
        })
    }
    const handleRightArrowClick = () => {setOffset((currentOffset) => {
        const newOffset = currentOffset + 700
        console.log(newOffset)
        return newOffset
    })}

    return (
        <div className="App">
            <div onClick={handleLeftArrowClick}>prev</div>
            <div className="calendar-wrapper">
                <CurrentDate classname={styles.CurrentDate} currentDate={currentDate}/>
                <div className={"window"}>
                    <Calendar currentYear={currentYear}/>
                </div>
                {/*<TaskList/>*/}
            </div>
            <div onClick={handleRightArrowClick}>next</div>
        </div>
    );
}

export default App;