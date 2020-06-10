import React, { Fragment } from "react"
import { MDBProgress } from "mdbreact"


const Stepper = ({ step }) => {

    return(
        <Fragment>
            <MDBProgress color="success" className="barra-test" value={ step } max={30} material/>
        </Fragment>

    )

}
export default Stepper
