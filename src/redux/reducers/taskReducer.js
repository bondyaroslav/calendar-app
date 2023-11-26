const initialState = {
    isShowing: false,
    tasks: []
}

const OPEN_TASK_LIST = "OPEN_TASK_LIST"
const CLOSE_TASK_LIST = "CLOSE_TASK_LIST"
const SET_TASKS = "SET_TASKS"
const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"

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

        default:
            return state
    }
}

export const openTaskListAC = (id) => ({ type: OPEN_TASK_LIST, id })
export const closeTaskListAC = () => ({ type: CLOSE_TASK_LIST })
export const setTasksAC = (tasks) => ({ type: SET_TASKS, tasks })
export const addTaskAC = (task) => ({ type: ADD_TASK, task })

export default taskReducer
