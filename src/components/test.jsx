import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
//import axios from "axios"
import Stepper from "./stepper"
import ButtonsStepper from "./buttonsStepper"
import Form from "./form"



const Test = () => {

    const [pesoIdeal, setPesoIdeal] = useState("")
    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const [sexo, setSexo] = useState("")
    const [edad, setEdad] = useState("")
    const [patologias, setPatologias] = useState("")
    const [ritmoVida, setRitmoVida] = useState("")
    const [dieta, setDieta] = useState("")
    const [estiloVida, setEstiloVida] = useState("")
    const [frecuenciaComerFuera, setFrecuenciaComerFuera] = useState("")
    const [tiempoParaCocinar, setTiempoParaCocinar] = useState("")
    const [meGustaBeberConComida, setMeGustaBeberConComida] = useState("")
    const [meGustaComer, setMeGustaComer] = useState("")
    const [habitosParaComer, setHabitosParaComer] = useState("")
    const [miVidaDiariaEs, setMiVidaDiariaEs] = useState("")
    const [actividadFisica, setActividadFisica] = useState("")
    const [objetivos, setObjetivos] = useState("")
    const [ultimaVezQueintenteAdelgazar, setUltimaVezQueintenteAdelgazar] = useState("")
    const [meGustaria, setMeGustaria] = useState("")
    const [email, setEmail] = useState("")
    const [step, setStep] = useState(0)
    
    const updateStep = stepper => {
        setStep(stepper)
    }
    //const sendForm = () => {
        // funciones de axios
   // }
    

    return(
        <>
            <div style={{ paddingTop:"10px", paddingLeft:"5px", paddingRight:"5px" }}>
                 <Stepper step={ step }/>
            </div> 
            <MDBContainer>
                <ButtonsStepper updateStep={ updateStep } step={ step }/>
                <Form />
            </MDBContainer>
        </>
    )
}
export default Test
