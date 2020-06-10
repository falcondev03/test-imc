import React, { Fragment, useState } from "react"
import { MDBInput } from "mdbreact"


const Form = ({ title, typeInput, configs }) => {
    const [radioChecked, setRadioChecked] = useState("")
    
    const radioClick = (e, setter)  => {
        setRadioChecked(e.target.value)
        setter(e.target.value)
    }

    return (
        <Fragment>
            <h5>{ title }</h5>
            {typeInput === "text" && configs.map((config, index) => 
                <MDBInput
                    key={ index }
                    onChange={ (e) => config.setterField(e.target.value) } 
                    label={ config.label } 
                    value={ config.stateField }  
                    type="text"/>)}
            
            { typeInput === "radio" && configs.map((config, index) => {
                return ( 
                <div key={ index } className="form-check">
                    <input
                        type="radio"
                        id={ config.id }
                        className="form-check-input"
                        onClick={ (e) => radioClick(e, config.setterField) }
                        checked={ radioChecked === config.label }
                        value={ config.label }/>
                    <label className="form-check-label" htmlFor={ config.id  }>{ config.label }</label>

                </div>)})}
        </Fragment>
    )
}
export default Form
