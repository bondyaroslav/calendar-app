import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderAllTree = (state) => {
    root.render(
        <App state={state} store={store}/>
    );
}

rerenderAllTree()

store.fillDatesInState()