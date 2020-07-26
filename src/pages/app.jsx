import React from "react"
import { Router } from "@reach/router"
import Imc from "../components/imc"
import ImcResult from '../components/imcResult'
const App = () => {
    return(
        <>
            <Router>
                <Imc path="/app/" />
                <ImcResult path="/app/resultado/:imc/:peso/:pesoIdeal" />
            </Router>
        </>
    )
}
export default App
