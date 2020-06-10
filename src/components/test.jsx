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
                {  step == 1 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 2 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 3 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 4 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 5 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 6 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 7 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 8 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 9 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 10 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 11 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 12 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 13 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 14 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 15 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 16 && <Form title="" typeInput="" configs={[]} /> } 
                {  step == 17 && <Form title="" typeInput="" configs={[]} /> } 

                <ButtonsStepper updateStep={ updateStep } step={ step }/>
            </MDBContainer>
        </>
    )
}
export default Test
