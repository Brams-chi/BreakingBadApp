import React, {useEffect, useState} from 'react'
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        motivo: '',
        okay: 0,
    });

    const {name,email,motivo,okay} = formState;

    useEffect(() => {
        console.log('Hey');
    }, []);

    // useEffect(() => {
    //     console.log('cambio el name');
    // }, [name]);

    // useEffect(() => {
    //     console.log('cambio el correo');
    // }, [email]);
    
    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name] : target.value
        });
        
    }

    const handleSubmit = ( ) =>{
        setFormState({
            ...formState,
            okay : 1,
        });
    }
    const handleRefresh = ( ) =>{
        setFormState({
            name: '',
            email: '',
            motivo: '',
            okay: 0,
        });
    }
    return (
        <>
            <h1> Tarjeta de Contacto </h1>
            <hr/>

            <div className="form-group">
                <input
                    type = "text"
                    name = "name"
                    className = "form-control"
                    placeholder = "Tu nombre"
                    autoComplete = "off"
                    value = { name }
                    onChange = { handleInputChange }
                />
                <input
                    type = "text"
                    name = "email"
                    className = "form-control"
                    placeholder = "Tu correo"
                    autoComplete = "off"
                    value = { email }
                    onChange = { handleInputChange }
                />
                <input
                    type = "text"
                    name = "motivo"
                    className = "form-control"
                    placeholder = "Motivo"
                    autoComplete = "off"
                    value = { motivo }
                    onChange = { handleInputChange }
                />
                <button
                    className="btn btn-primary btn-submit" 
                    onClick={() =>{
                    handleSubmit();
                }}
                > Obtener </button>
            </div>
            { (okay) ? <Message name = {name} email ={email} motivo ={ motivo }/>:<h2>Completa el formulario...</h2>}
            { (okay) ? <button
                className="btn btn-danger btn-submit" 
                onClick={() =>{
                handleRefresh();
            }}
            > Eliminar </button>:''}
        </>
    )
}
