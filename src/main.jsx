import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

// import { HooksApp } from "./HooksAp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWhitCustomHook } from "./01-useState/CounterWhitCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HooksApp /> */}
        {/* <CounterApp /> */}
        {/* <CounterWhitCustomHook/> */}
        <SimpleForm/>
    </React.StrictMode>
)