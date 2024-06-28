import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

// import { Prueba } from "./02-useEffect/Prueba";
// import { HooksApp } from "./HooksAp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWhitCustomHook } from "./01-useState/CounterWhitCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HooksApp /> */}
        {/* <CounterApp /> */}
        {/* <CounterWhitCustomHook/> */}
        {/* <FormWithCustomHook/> */}
        {/* <MultipleCustomHooks/> */}
        {/* <FocusScreen/> */}
        {/* <Layout/> */}
        {/* <Memorize/> */}
        <MemoHook/>
        {/* <Prueba/> */}
        {/* <SimpleForm/> */}
    </React.StrictMode>
)