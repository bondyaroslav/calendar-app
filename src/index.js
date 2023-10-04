import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import App from './App';
import {currentDate, currentYear} from "./dates";
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <App currentYear={currentYear} currentDate={currentDate}/>,
    </Provider>,
)

