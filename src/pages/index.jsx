import React from "react"
import { MDBBox, MDBBtn } from "mdbreact"
import {Link} from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoIndex from "../components/video"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <MDBBox tag="div" pb="5" pt="5" display="flex" flex="column" className="text-center" justifyContent="center" style={{backgroundColor:"#f5f5f5"}}>
        <h2 className="h1-responsive w-100">
          Todo Logro pasa por la Decisión de Intentarlo
        </h2>
        <br/>
        <h6 className="w-100">Domina tu mente para conquistar tu cuerpo</h6>
      </MDBBox>
    <MDBBox display="flex" flex="column" pl="2" pr="2" className="imagen-fondo">
      <MDBBtn gradient="purple" className="rounded-pill margen-negativo">
        <Link to="/test" className="text-light">
          Obtener mi Plan Personalizado
        </Link>
      </MDBBtn>
    </MDBBox>
      <VideoIndex/>
  </Layout>
)

export default IndexPage
