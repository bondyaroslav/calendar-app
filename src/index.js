import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {currentDate, dates} from "./dates"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <App dates={dates} currentDate={currentDate}/>,
    </Provider>,
);