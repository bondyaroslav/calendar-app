import calendarState from "../../dates";

let initialState = {
    isShowing: false,
    months: calendarState.year.months
}

const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const TOGGLE_TASK_LIST = "TOGGLE_TASK_LIST"

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_TASK):

        default:
            return state
    }
}

export const addTaskAC = (task) => ({type: ADD_TASK, task})

export default taskReducer