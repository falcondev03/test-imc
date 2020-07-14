import React, { Fragment } from "react"
import { MDBProgress, MDBBox } from "mdbreact"

const Stepper = ({ step }) => {

    return(
        <Fragment>
            <MDBProgress color="default" className="barra-test" value={ step } max={19} material/>
        </Fragment>
    )

}
export default Stepper
