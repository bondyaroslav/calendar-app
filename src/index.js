import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {currentDate, currentYear} from "./dates"

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log(currentYear)

root.render(
    <Provider store={store}>
        <App currentYear={currentYear} currentDate={currentDate}/>,
    </Provider>,
);