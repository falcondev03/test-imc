import React from "react"
import { Router } from "@reach/router"
import Test from "../components/test"

const App = () => {
    return(
        <>
            <Router>
                <Test path="/app/"/>
            </Router>
        </>
    )
}
export default App
