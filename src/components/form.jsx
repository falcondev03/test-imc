import React, { Fragment } from "react"
import { MDBInputGroup, MDBRow as Row, MDBCol as Col, MDBInput as Input  } from "mdbreact"
import { useField } from "formik"

export const FormInputs = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const [fieldCheck, metaCheck] = useField({ ...props, type:'checkbox' })
    const [fieldRadio, metaRadio] = useField({ ...props, type: 'radio' })
    const [fieldText, metaText] = useField(props)
    
    return (
        <Fragment>
                    {props.type === "number" && 
                        <MDBInputGroup material { ...field } { ...props }/>
                    }
                    
                    {props.type === "radio" && 
                        <div className="form-check">
                            <input id={ props.id } className="form-check-input" { ...fieldRadio } { ...props }/>
                            <label className="form-check-label" htmlFor={ props.id }>
                                { label }
                            </label>
                        </div>
                    }

                    {props.type === "checkbox" && 
                        <div className="form-check">
                            <input id={ props.id } className="form-check-input" { ...fieldCheck } { ...props } />
                            <label className="form-check-label" htmlFor={  props.id }>{ label }</label>

                        </div>
                    }
                    {props.type === "text" &&
                            <Input id={ props.id } { ...fieldText } { ...props }/>
                    }
        </Fragment>
    )
}

export const FormContainer = ({ children, title }) => {

    return(
        <Fragment>
            <Row center style={{ marginTop:"60px", marginBottom: "60px" }}>
                <Col size="11">
                    <p style={{textAlign:"center", fontSize:"18px" }}>{ title }</p>
                </Col>
                <Col size="10">
                { children }
                </Col>
            </Row>
        </Fragment>
    )
}
