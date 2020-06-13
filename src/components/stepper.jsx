import React, { Fragment } from "react"
import { MDBProgress } from "mdbreact"


const Stepper = ({ step }) => {

    return(
        <Fragment>
            <MDBProgress color="success" gadient="" className="barra-test" value={ step } max={18} material/>
        </Fragment>

    )

}
export default Stepper
