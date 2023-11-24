import {combineReducers, createStore} from "redux";
import taskReducer from "./reducers/taskReducer";

let reducers = combineReducers({
    taskList: taskReducer,
})

let store = createStore(reducers)

export default store