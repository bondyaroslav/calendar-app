let initialState = {
    tasks: []
}

const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const CHECK_TASK = "CHECK_TASK"

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {...state, tasks:[...state.tasks, action.payload]}
        }
        case DELETE_TASK: {
            return {...state, tasks: initialState.tasks.filter(task => task.id !== action.payload)}
        }
        case CHECK_TASK: {
            return (console.log("CHECK_TASK"))
        }
        default:
            return state
    }
}

export const addTaskActionCreator = (payload) => ({type: ADD_TASK, payload})
export const deleteTaskActionCreator = (payload) => ({type: DELETE_TASK, payload})
export const checkTaskActionCreator = (payload) => ({type: CHECK_TASK, payload})

export default taskReducer