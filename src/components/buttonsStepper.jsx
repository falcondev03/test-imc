import React, { Fragment } from "react"
import { MDBBtn } from "mdbreact"


const ButtonsStepper = ({ updateStep, step }) => {

    const handlerButtonNext = () => {
        if(step !== 30) updateStep(step + 1)
    }

    const handlerButtonBack = () => {
       if(step !== 0) updateStep(step - 1) 
    }

    return (
        <Fragment>
            <MDBBtn onClick={ handlerButtonBack }>Atras</MDBBtn>
            <MDBBtn onClick={ handlerButtonNext } gradient="purple">Continuar</MDBBtn>
        </Fragment>
    )

}
export default ButtonsStepper
