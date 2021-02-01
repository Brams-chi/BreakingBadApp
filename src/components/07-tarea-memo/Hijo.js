import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary margin-s"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
