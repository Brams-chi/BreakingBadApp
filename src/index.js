import React from 'react';
import ReactDOM from 'react-dom';
import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { DescriptionCaractersHook } from './components/03-examples/DescriptionCaractersHook';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { HookApp } from './HookApp';
 
ReactDOM.render (
    <div className = "app-content">
        {/* <FormWithCustomHook/> */}
        <DescriptionCaractersHook/>
        <MultipleCustomHooks/>
    </div>,
    document.getElementById('root')
);
