import React from 'react'
import { useField } from "formik"

const InputRadio = props => { 
    const [fieldRadio, metaRadio] = useField({ ...props, type: 'radio' })

    return(
        <>
            <div className="form-check">
                <input id={ props.id } className="form-check-input" { ...fieldRadio } { ...props }/>
                <label className="form-check-label" htmlFor={ props.id }>
                    { props.label }
                </label>
            </div>
        </>
)
}
export default InputRadio