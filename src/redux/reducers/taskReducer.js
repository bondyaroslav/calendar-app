const initialState = {
    isShowing: false,
    tasks: []
}

const OPEN_TASK_LIST = "OPEN_TASK_LIST"
const CLOSE_TASK_LIST = "CLOSE_TASK_LIST"
const SET_TASKS = "SET_TASKS"
const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS"

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_TASK_LIST:
            return { ...state, isShowing: true }

        case CLOSE_TASK_LIST:
            return { ...state, isShowing: false }

        case SET_TASKS:
            return { ...state, tasks: action.tasks }

        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.task] }

        case DELETE_TASK:
            let updatedTasks = state.tasks.filter(task => task.id !== action.taskId)
            return { ...state, tasks: updatedTasks }

        // case TOGGLE_TASK_STATUS:
        //     let tasks = state.tasks.filter( task => task.id === action.taskId ? {...task, status: !task.status} : task)
        //     return {...state, tasks: tasks}

        case TOGGLE_TASK_STATUS:
            const tasks = state.tasks.map(task =>
                task.id === action.taskId ? { ...task, status: !task.status } : task
            );
            return { ...state, tasks: tasks };

        default:
            return state
    }
}

export const openTaskListAC = () => ({ type: OPEN_TASK_LIST })
export const closeTaskListAC = () => ({ type: CLOSE_TASK_LIST })
export const setTasksAC = (tasks) => ({ type: SET_TASKS, tasks })
export const addTaskAC = (task) => ({ type: ADD_TASK, task })
export const deleteTaskAC = (taskId) => ({ type: DELETE_TASK, taskId })
export const toggleTaskStatusAC = (taskId) => ({ type: TOGGLE_TASK_STATUS, taskId })

export default taskReducer
