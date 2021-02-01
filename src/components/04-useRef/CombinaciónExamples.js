import React, { useState } from 'react';
import { DescriptionCaractersHook } from '../03-examples/DescriptionCaractersHook';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css'

export const FocusScreen = () => {
    const {counter,increment,decrement} = useCounter(1);
    const [show,setShow] = useState(false);

    return (
        <div className="w-100">
            <h2>
                Que pasa carnal 
                <button 
                className = "btn btn-primary btn-h1"
                onClick = {()=>{
                    setShow(!show);
                }}
            >
                { (show) ? 'Hide':'Show'}
            </button></h2>
            
            <hr/>

            {show && <DescriptionCaractersHook counter={counter}/>}
            {
                (counter>1 && show) 
                ?
                    (<button 
                        onClick = {decrement}
                        className = "btn btn-light btn-quote"
                    
                    >Last</button>)
                :
                ''
                
            }

            { show && <button 
                onClick = {increment}
                className = "btn btn-info btn-quote"
            
            >Next</button> 
            }

        </div>
    )
}
