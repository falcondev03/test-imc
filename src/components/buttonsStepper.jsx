import React, { Fragment } from "react"
import { MDBBtn } from "mdbreact"

const ButtonsStepper = ({ updateStep, step }) => {

    const handlerButtonNext = () => {
        if(step !== 19) return updateStep(step + 1)
    }

    const handlerButtonBack = () => {
       if(step !== 0) return updateStep(step - 1) 
    }

    return (
        <Fragment>
            { step != 0 && <MDBBtn onClick={ handlerButtonBack } outline className="rounded-pill">Atras</MDBBtn>}
            <MDBBtn type="submit" className="rounded-pill" gradient="purple">Adelante</MDBBtn>
        </Fragment>
    )

}
export default ButtonsStepper
