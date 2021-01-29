import { useState } from "react"

export const useForm = ( initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name] : target.value
        });
        
    }
    const handleRefresh = () =>{
        setFormValues({
            name: '',
            email: '',
            pass: '',
            okay: 0,
        });
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault();
        if(formValues.pass === '123456'){
            setFormValues({
                ...formValues,
                okay : 1,
            });
        }
    }

    return [formValues, handleInputChange, handleSubmit, handleRefresh];

}