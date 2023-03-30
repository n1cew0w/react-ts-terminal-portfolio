import React from 'react';

import './App.css';
import TaskBar from "./components/TaskBar/TaskBar";
import MainScreen from "./components/MainScreen/MainScreen";

function App() {
    return (
        <div className="App">
            <MainScreen/>
            <TaskBar/>
        </div>
    );
}

export default App;
