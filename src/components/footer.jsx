import React from "react"
import {MDBFooter, MDBContainer, MDBRow, MDBCol} from "mdbreact"

const Footer = () => {


    return(
        <footer>
            <MDBFooter color="grey lighten-3" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left text-dark">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                            </p>
                        </MDBCol>
                        {/* <MDBCol md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol> */}
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3 text-dark">
                    <MDBContainer fluid>
                        Desarrollado por: <b>resagar</b>
                        Github: @resagar
                    </MDBContainer>
                </div>
            </MDBFooter>
        </footer>
    )
}

export default Footer