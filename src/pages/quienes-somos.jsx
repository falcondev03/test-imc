import React from "react"
import { MDBContainer } from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuienesSomos = () => (
  <Layout>
    <SEO title="Quiene Somos" />
    <MDBContainer  style={{paddingTop: "25px", paddingBotton:"25px"}}>
      <h2>Quienes Somos:</h2>
      <hr style={{border:"1px solid rgba(0, 0, 0 ,0.4)"}}/>
      <p>OhStyle es un grupo de profesionales volcados en el mundo de la nutrición y todo el apoyo necesario que podemos ofrecerte para que consigas tus metas.</p>
      <p>No somos una web para adelgazar, perder peso y luego olvidarnos de ti ( o tu de nosotros), lo que queremos es educarte para un nuevo estilo de vida donde dejemos atrás la culpabilidad y los malos hábitos alimentarios.</p>
      <p>Hay personas que desean adelgazar, otras engordar, otras mantenerse, pero al fin y al cabo todas y cada una de ellas quieren ser escuchadas.</p>
      <p>Es por eso que Ohstyle! no es solo nutrición, es también psicología y estilo, te ayudamos a sacar tu mejor versión para que brilles.</p>
      <p>Déjanos asesorarte y acompañarte en esta travesía. A partir de ahora queremos ser tu Equipo y estar siempre a tu lado con un coach personal y un coach nutricional.</p>
      <p>Anímate y conócenos. Te estamos esperando.</p>
      <h4 className="text-center">Team OhStyle!</h4>
    </MDBContainer>
  </Layout>
)

export default QuienesSomos
