import React, { useState } from "react"
import { Link } from "gatsby"
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,MDBNavbarToggler,MDBCollapse} from "mdbreact";
 
import Logo from "../components/logo"



const Header = (props) => {
  const [menu, setMenu] = useState(false)
  
  return(
    <header style={{height: "5% !important"}}>
        <MDBNavbar {...props} className="ajuste_nav">
            <MDBNavbarBrand>
              <Link to="/">
                <Logo/>
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={() => setMenu(!menu) }/>
            <MDBCollapse id="navbarCollapse3" isOpen={menu} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <Link to="/" className="nav-link">Inicio</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/quienes-somos" className="nav-link">Quienes Somos</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/apoyo" className="nav-link">Apoyo</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/staff" className="nav-link">Staff</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/contacto" className="nav-link">Contacto</Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>             
        </MDBNavbar>
    </header>
  )
}


export default Header
