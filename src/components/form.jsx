import React, { Fragment } from "react"
import { MDBInputGroup, MDBRow as Row, MDBCol as Col, MDBInput as Input, MDBAlert  } from "mdbreact"
import { useField } from "formik"
import InputRadio from "./inputs/InputRadio"
import InputCheckbox from "./inputs/inputCheckbox"

export const FormInputs = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const [fieldText, metaText] = useField(props)

    return (
        <Fragment>
                    {props.type === "number" &&
                        <Row center>
                             <Col size="5" sm="4" md="3" lg="2" xl="2">
                                <MDBInputGroup material { ...field } { ...props }/>    
                            </Col>
                        </Row>
                        
                    }
                    
                    {props.type === "radio" &&
                    <Row center>
                         <Col size="8" sm="8" md="7" lg="6" xl="6" className="offset-1 offset-sm-3 offset-md-3 offset-lg-3 offset-xl-3">
                            <InputRadio {...props} label={ label } />
                        </Col>
                    </Row> 
                    }

                    {props.type === "checkbox" && 
                        <Row center>
                         <Col size="8" sm="8" md="7" lg="6" xl="6" className="offset-1 offset-sm-3 offset-md-3 offset-lg-3 offset-xl-2">
                            <InputCheckbox {...props} label={ label } />
                        </Col>
                    </Row>
                    }
                    {props.type === "text" &&
                        <Row center>
                            <Col size="10" sm="6" md="6" lg="4" xl="4">
                                <Input id={ props.id } { ...fieldText } { ...props }/>
                            </Col>
                        </Row>
                    }
        </Fragment>
    )
}

export const FormContainer = ({ children, title }) => {

    return(
        <Fragment>
            <Row center className="mt-3 mb-3">
                <Col size="11">
                    <div style={{textAlign:"center", fontSize:"18px" }}>{ title }</div>
                </Col>
            </Row>
                { children }
        </Fragment>
    )
}