import React from 'react'

export const Message = ( {name,email,motivo}) => {
    return (
        <div className="card card-contact" >
            <div className="card-body">
                <h5 className="card-title">Licencia para {motivo}</h5>
                <p className="card-text"> Sr(a) {name} </p>
                <p className="card-text"> Cotactatar al siguiente correo {email} </p>
            </div>
        </div> 
    )
}
