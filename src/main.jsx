import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

// import { HooksApp } from "./HooksAp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWhitCustomHook } from "./01-useState/CounterWhitCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HooksApp /> */}
        {/* <CounterApp /> */}
        {/* <CounterWhitCustomHook/> */}
        {/* <FormWithCustomHook/> */}
        <MultipleCustomHooks/>
        {/* <SimpleForm/> */}
    </React.StrictMode>
)