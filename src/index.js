import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderAllTree = () => {
    root.render(
        <App state={store.state} tasksInState={store.state.tasks} currentDate={store.state.currentDate}/>
    );
}

rerenderAllTree()

store.fillDatesInState()