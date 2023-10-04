// import React from "react";
// import styles from "./Task.module.css";
//
// const Task = ({ status, deleteTask, changeTaskStatus, id, name }) => {
//     const handleCheckboxChange = () => {
//         changeTaskStatus(id);
//     };
//
//     const handleDeleteClick = () => {
//         deleteTask(id);
//     };
//
//     return (
//         <li className={styles.li}>
//             <input
//                 type="checkbox"
//                 checked={status}
//                 onChange={handleCheckboxChange}
//             />
//             <p>{name}</p>
//             <button className={styles.deleteButton} onClick={handleDeleteClick}>
//                 x
//             </button>
//         </li>
//     );
// };
//
// export default Task;