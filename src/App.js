import "./App.css"
import Calendar from "./Components/Calendar";

function App(props) {

    return (
        <div className="App">
            <div className="wrapper">
                <Calendar state={props.store.state}/>
            </div>
        </div>
    );
}

export default App;
