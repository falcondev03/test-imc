import React from 'react'
import { MDBContainer as Container, MDBFooter as Footer, MDBRow as Row, MDBBtn as Btn } from 'mdbreact'
import Chart from './chart'
import Header from "./header"

const imcResult = ({ imc, peso, pesoIdeal }) => {
    return (
        <div>
            <Header color="purple-gradient" dark/>
            <Container style={{ height:"500px"}}>
                <Chart imc={ imc } peso={ peso } pesoIdeal={ pesoIdeal } />
                <footer className="fixed-bottom pb-3"> 
                    <Footer color="white"> 
                        <Row center>
                            <Btn className="rounded-pill" gradient="purple">Adelante</Btn>
                        </Row>
                    </Footer>
                </footer>  
            </Container>
        </div>
    )
}

export default imcResult
