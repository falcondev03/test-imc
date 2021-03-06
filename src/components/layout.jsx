import React from "react"
import { MDBContainer } from "mdbreact"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <MDBContainer fluid className="container-global">
        <Header color="grey lighten-3" light />
          <main className="layout-padding">{children}</main>
        <Footer />
      </MDBContainer>
    </>
  )
}

export default Layout
