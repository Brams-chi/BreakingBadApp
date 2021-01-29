import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
    const {counter,increment,decrement} = useCounter(1);
    const { loading , data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author,quote,series} = !!data && data[0];
   
    return (
        <div className = "content-card-info">
            <h1>Quotes of Breaking Bad</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className = "alert alert-info text-center ">
                            loading...
                        </div>
                    ) 
                :
                    (
                        <div>
                            <div className="card card-quote" >
                                <div className="card-body quote-flex">
                                    <h5 className="card-title">{series}</h5>
                                    <hr/>
                                    <p className="card-text"> {quote} </p>
                                    <footer className= "blockquote-footer text-right-quote">
                                    From : { author}
                                </footer>
                                </div>
                            </div> 
                            {
                                (counter>1) 
                                ?
                                    (<button 
                                        onClick = {decrement}
                                        className = "btn btn-light btn-quote"
                                    
                                    >Last quote</button>)
                                :
                                ''
                                
                            }
                            <button 
                                onClick = {increment}
                                className = "btn btn-info btn-quote"
                            
                            >Next quote</button>
                         
                        </div>
                    )
            }
            
        </div>
    )
}
