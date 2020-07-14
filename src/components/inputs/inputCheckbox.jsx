import React from 'react'
import { useField } from "formik"
import { MDBAlert } from 'mdbreact'
// import InputRadio from './InputRadio'

const InputCheckbox = props => {
    const [fieldCheck, metaCheck] = useField({ ...props, type:'checkbox' })
    
    return(
        <>
            <div className="form-check">
                <input id={ props.id } className="form-check-input" { ...fieldCheck } { ...props } />
                <label className="form-check-label" htmlFor={  props.id }>
                    { props.label }
                </label>
            </div>
        </>
    )
}

export default InputCheckbox