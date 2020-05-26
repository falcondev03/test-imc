import React from "react"
import { MDBContainer } from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacto = () => (
  <Layout>
    <SEO title="Contacto" />
    <MDBContainer  style={{paddingTop: "25px", paddingBotton:"25px"}}>
      <h2>Contacto:</h2>
      <hr style={{border:"1px solid rgba(0, 0, 0 ,0.4)"}}/>
    </MDBContainer>
  </Layout>
)

export default Contacto