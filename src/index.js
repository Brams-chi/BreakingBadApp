import React from 'react';
import ReactDOM from 'react-dom';
//import { FocusScreen } from './components/04-useRef/CombinaciónExamples';
// import { CallbackHook } from './components/06-memos/CallbackHook';
import './components/02-useEffect/effects.css';
import { Padre } from './components/07-tarea-memo/Padre';

// import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks';
// import { DescriptionCaractersHook } from './components/03-examples/DescriptionCaractersHook';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { HookApp } from './HookApp';

ReactDOM.render (
    <div className = "app-content">
        {/* <FormWithCustomHook/> */}
        {/* <DescriptionCaractersHook/>
        <MultipleCustomHooks/> */}
        <Padre/>
    </div>,
    document.getElementById('root')
);
