import React from "react"
import  Img from "gatsby-image"
import { useStaticQuery, graphql} from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query{
      mobileImage: file(relativePath: {eq: "images/logo.png"}){
        childImageSharp{
          fixed(width: 70, quality: 100){
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImage: file(relativePath: {eq: "images/logo.png"}){
        childImageSharp{
          fixed(width: 120, quality: 100){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
`)
    const images = [
      data.mobileImage.childImageSharp.fixed,
      {
        ...data.desktopImage.childImageSharp.fixed,
        media:`(min-width: 768px)`,
      },
    ]

  return <Img fixed={images} alt="Logo de la empresa"/>
}

export default Logo
