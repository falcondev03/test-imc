import React from "react"
import { MDBContainer } from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Staff = () => (
  <Layout>
    <SEO title="Staff" />
    <MDBContainer  style={{paddingTop: "25px", paddingBotton:"25px"}}>
      <h2>Staff:</h2>
      <hr style={{border:"1px solid rgba(0, 0, 0 ,0.4)"}}/>
    </MDBContainer>
  </Layout>
)

export default Staff