// import React, {useState} from "react";
// import styles from "./TaskList.module.css"
// import Task from "./Task";
// import {addTaskActionCreator, deleteTaskActionCreator} from "../redux/calendarReducer";
// import {useDispatch} from "react-redux";
//
// const TaskList = ({shown, tasks, selectedDay, closeTaskList}) => {
//
//     const dispatch = useDispatch()
//
//     const addTask = () => {
//         let newTask = {
//             id: 1,
//             name: "task1",
//             status: false,
//             date: {
//                 day: 1,
//                 month: 8,
//                 year: 2023
//             }
//         }
//         dispatch(addTaskActionCreator(newTask))
//     }
//
//     const deleteTask = () => {
//         dispatch(deleteTaskActionCreator())
//     }
//
//     if (shown === true) {
//         return (
//             <div className={styles.TaskList}>
//                 <div className={styles.wrapper}>
//                     <p>Task List</p>
//                     <p>Day {selectedDay}</p>
//                     <button className={styles.button} onClick={closeTaskList}>x</button>
//                 </div>
//                 <div>
//                     <input placeholder={"enter new task"}
//                            value={name}
//                            onChange={event => addTaskName(event)}
//                            onKeyPress={event => handleAddTaskKeyPress(event)}
//                     />
//                     <button onClick={() => {
//                         addTask()
//                     }}>add task
//                     </button>
//                 </div>
//                 <ul className={styles.ul}>
//                     {tasksElement}
//                 </ul>
//             </div>
//         )
//     } else return (<div></div>)
// }
//
// export default TaskList