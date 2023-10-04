import {combineReducers, createStore} from "redux";
import taskReducer from "./taskReducer";

let reducers = combineReducers({
    taskList: taskReducer,
})

let store = createStore(reducers)

export default store