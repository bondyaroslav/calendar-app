import {combineReducers, createStore} from "redux";
import calendarReducer from "./reducers/calendarReducer";

let reducers = combineReducers({
    calendar: calendarReducer,
})

let store = createStore(reducers)

export default store