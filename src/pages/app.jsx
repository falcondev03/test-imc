import React from "react"
import { Router } from "@reach/router"
import Imc from "../components/imc"

const App = () => {
    return(
        <>
            <Router>
                <Imc path="/app/" />
            </Router>
        </>
    )
}
export default App
