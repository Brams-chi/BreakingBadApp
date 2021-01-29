import React, {useEffect} from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';
import { Message } from './Message';


export const FormWithCustomHook = () => {

    const [formValues,handleInputChange, handleSubmit, handleRefresh] = useForm({
        name: '',
        email: '',
        pass: '',
        okay: 0,
    });

    const {name,email,pass,okay} = formValues;

    useEffect(() => {
        console.log('Hey');
    }, []);
        
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1> Login para mi cora </h1>
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
                    type = "password"
                    name = "pass"
                    className = "form-control"
                    placeholder = "******"
                    autoComplete = "off"
                    value = { pass }
                    onChange = { handleInputChange }
                />
                <button 
                    type="submit"
                    className="btn btn-primary btn-submit" 
                    
                > Obtener </button>
            </div>
            { (okay) ? <Message name = {name} email ={email} pass ={ pass }/>:<h2>Completa el formulario...</h2>}
            { (okay) ? <button
                className="btn btn-danger btn-submit" 
                onClick={ handleRefresh } 
            > Eliminar </button>:''}
        </form>
    )
}
