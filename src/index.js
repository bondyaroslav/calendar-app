import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store";

export const rerenderAllTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
}

rerenderAllTree()


store.fillDatesInState()
store.getDaysInMonth()
store.showDates()

