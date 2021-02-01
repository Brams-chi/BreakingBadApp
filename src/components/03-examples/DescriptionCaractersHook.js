import React from 'react';
//import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const DescriptionCaractersHook = ({counter}) => {
    console.log(counter);
    const { loading , data} = useFetch (`https://www.breakingbadapi.com/api/characters/${counter}`);
    const {name,nickname,occupation,status,img,appearance,category,portrayed} = !!data && data[0];
    const listOcupations = !!occupation && ((occupation.length >0) ? occupation.map( (value,key) => (key>0) ?  ', ' + value : ' ' + value ) : 'No hay ocupaciones');
    const listTemporadas = !!appearance && ((appearance.length >0) ? appearance.map( (value,key) => (key>0) ?  ', ' + value : ' ' + value ) : 'No existe');
    
    return (
        <div className = "content-card-info">
            <h1>Character information.</h1>
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
                        <div className = "content-box">
                            <div className="card card-quote" >
                                <div 
                                    style={{width:"100%",
                                            height:"20rem",
                                            backgroundImage:`url(${img})`,
                                            backgroundPosition : `center`,
                                            backgroundRepeat: `no-repeat`,
                                            backgroundSize: `contain`,
                                            objectFit: `cover`,
                                            backgroundColor: `black`}} 
                                            className="img-quote" 
                                            alt={name}
                                >
                                </div>
                                <div className="card-body quote-flex">
                                    <h5 className="card-title">{name}</h5>
                                    <div className="card-text">
                                        Alias : {nickname}
                                        <br/>
                                        Interpreter : {portrayed}
                                        <br/>

                                        Status : {status}
                                        <br/>

                                        Appearances : {listTemporadas}
                                        <br/>
                                        Activities :{listOcupations}
                                        <br/>
                                    </div>


                                    <footer className= "blockquote-footer text-right-quote">
                                        From : {category}
                                    </footer>
                                </div>
                            </div> 
                            
                         
                        </div>
                    )
            }
            
        </div>
    )
}
