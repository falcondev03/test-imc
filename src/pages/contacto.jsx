import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardHeader  } from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacto = () => (
  <Layout>
    <SEO title="Contacto" />
    <MDBContainer  style={{paddingTop: "25px", paddingBotton:"25px"}}>
      <MDBRow>
        <MDBCol sm="12">
        <MDBCard>
          <MDBCardHeader className="purple-gradient p-4">
            
            <p className="h4 text-center text-white">Contacto</p>
          </MDBCardHeader>
          <MDBCardBody>
            <form>
              <div className="grey-text">
                <MDBInput label="Nombre y Apellido" icon="user" group type="text" validate error="dato Faltante"
                  success="right" />
                <MDBInput label="Email" icon="envelope" group type="email" validate error="Dato Faltante"
                  success="right" />
                <MDBInput label="Telefono" icon="mobile" group type="number" validate error="Dato faltante" success="right" />
                <MDBInput label="Pais" icon="compass" group type="text" validate error="Dato Faltante" success="right" />
                <MDBInput label="Asunto" icon="tag" group type="text" validate error="Dato Faltante" success="right" />
                <MDBInput type="textarea" rows="3" label="Mensaje" icon="pencil-alt" />
              </div>
              <div className="text-center">
                <MDBBtn gradient="purple" className="rounded-pill">
                  Enviar
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default Contacto
