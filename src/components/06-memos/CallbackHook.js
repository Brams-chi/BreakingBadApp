import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( (num) =>{
        setCounter(c => c+num)
    },[setCounter]);

    return (
        <div className="w-100">

            <h1>eseCallback hook { counter }</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
