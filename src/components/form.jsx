import React, { Fragment } from "react"
import { MDBInput } from "mdbreact"


const Form = () => {

    return (
        <Fragment>
            <MDBInput label="soy el uno"  type="text"/>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                    <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
                </div>
            <MDBInput label="soy el tres"  type="radio"/>
        </Fragment>
    )
}
export default Form
//{ field, typeInput, inputs, labels, title }
