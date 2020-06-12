import React, { useState } from 'react'
import { MDBContainer as Container, MDBRow as Row } from 'mdbreact'
//import axios from "axios"
import { Formik, Form } from "formik"
import Stepper from "./stepper"
import ButtonsStepper from "./buttonsStepper"
import {FormInputs, FormContainer}  from "./form"



const Test = () => {
    const [step, setStep] = useState(0)
    const preguntas = [
        "Cual es el Peso Ideal al que quieres llegar?",
        "Cual es tu altura y peso?",
        "Cual es tu Sexo?",
        "Cual es tu edad?",
        "Sufre de alguna de estas patologias?",
        "Mi Ritmo de Vida es:",
        "Yo Como...",
        "Mi Estilo de Vida es..",
        "Salgo a Comer Fuera...",
        "El tiempo que tengo para cocinar es...",
        "Lo que mas me gusta comer es...",
        "Suelo beber con las comidas...",
        "Yo soy de...",
        "Mi vida diaria es...",
        "Mi actividad fisica es...",
        "Objetivos",
        "La ultima vez que intente adelgazar fue...",
        "Me gustaria...",

    ] 
    const updateStep = stepper => {
        setStep(stepper)
    }
    //const sendFormInputs = () => {
        // funciones de axios
   // }
    

    return(
        <>
            <div style={{ paddingTop:"10px", paddingLeft:"5px", paddingRight:"5px" }}>
                 <Stepper step={ step }/>
            </div> 

            <Container>
                <Formik 
                    initialValues={{
                        pesoIdeal:"",
                        altura:"",
                        peso:"",
                        sexo:"",
                        edad:"",
                        patologias:{
                            diabetes:false,
                            tension_arterial:false,
                            problemas_cardiacos:false,
                            problemas_endocrinos:false,
                            problemas_renales:false,
                            problemas_hormonales:false
                        },
                        ritmoVida:"",
                        dieta:"",
                        estiloVida:"",
                        frecuenciaComerFuera:"",
                        tiempoParaCocinar:"",
                        meGustaComer:"",
                        meGustaBeberConComida:"",
                        habitosParaComer:"",
                        miVidaDiariaEs:"",
                        actividadFisica:"",
                        objetivos:{
                            quiero_cambiar_mi_estilo_de_vida_por_completo:false,
                            solo_quiero_adelgazar_y_quedarme_en_mi_peso_lo_antes_posible:false,
                            quiero_adelgazar_pero_no_tengo_prisa:false,
                            quiero_mejorar_algunos_de_mis_hábitos:false
                        },
                        ultimaVezQueintenteAdelgazar:"",
                        meGustaria:{
                            que_me_dieran_el_máximo_apoyo_necesito_que_me_motiven:false,
                            mentalizarme_necesito_que_me_ayuden_con_eso:false,
                            se_lo_que_quiero_empecemos_ya:false,
                            adelgazar_hacer_ejercicio_y_conocer_mas_personas_en_mi_situación:false,
                            atención_personalizada_integral_con_un_coach_nutricional:false
                        },
                        email:"",
                    }}>
                    <Form>
                        <FormContainer title={ preguntas[step] }>

                            { step == 0 && <FormInputs type="number" name="pesoIdeal" id="pesoIdeal" append="kg" />}
                            { step == 1 && <FormInputs type="number" name="altura" id="altura" append="cm" /> }
                            { step == 1 && <FormInputs type="number" name="peso" id="peso" append="kg"/> } 

                            {  step == 2 && ["masculino", "femenino"].map((label, key) =>

                                <FormInputs key={ key } label={ label } type="radio" value={ label } name="sexo" id={ `sexo${key}` }/>

                            )} 

                            {  step == 3 && ["18-24", "25-34", "35-44", "45-54", "55 o mas"].map((label, key)=> 
                                <FormInputs label={ label } key={ key } type="radio" value={ label } name="edad" id={ `edad${key}` }/> 
                            )} 

                            {  step == 4 && 
                                ["diabetes",
                                "tension arterial",
                                "problemas cardiacos",
                                "problemas endocrinos",
                                "problemas renales",
                                "problemas hormonales"]
                                .map((label, key)=> 
                                    <FormInputs
                                        key={ key }
                                        label={ label }
                                        type="checkbox"
                                        name={ `patologias.${label}` }
                                        id={`patologias${key}`}
                                    />
                            )}

                            {  step == 5 && 
                                ["desenfrenado y estresante","relativamente tranquilo", "muy tranquilo"].map((label, key) =>
                                <FormInputs type="radio" key={key} name="ritmoVida" label={ label } value={ label } id={`vida${key}`}/>
                            )} 

                            {  step == 6 &&
                                ["3 veces al dia","5 veces al dia y con 3 horas de diferencia entre comidas", "por impulsos"]
                                .map((label, key) =>
                                <FormInputs type="radio" key={key} name="dieta" label={ label } value={ label } id={`dieta${key}`} />
                            )} 

                            {  step == 7 && 
                                ["saludable, me cuido mucho",
                                "he de cuidarme mas, soy un desastre",
                                "no me cuido nada pero quiero cambiar mis habitos"]
                                .map((label, key) =>
                                    <FormInputs type="radio" key={key} name="estiloVida" label={ label } value={ label } id={`${key}`}/>
                            )} 

                            {  step == 8 &&
                                ["practicamente todos los dias", "a menudo 2-3 veces por semana","solo en ocasiones especiales"]
                                .map((label, key) =>
                                <FormInputs type="radio" key={key} name="frecuenciaComerFuera" label={ label } value={ label } id={`comerFuera${key}`} />
                            )} 

                            {  step == 9 &&
                                ["no tengo tiempo,me hago cualquier cosa",
                                "relativo, lo suficiente para cocinar algo saludable",
                                "soy cocinillas y tengo tiempo para entretenerme"]
                                .map((label, key) =>
                                    <FormInputs
                                        type="radio"
                                        key={key}
                                        name="tiempoParaCocinar"
                                        label={ label }
                                        value={ label }
                                        id={`tiempoCocinar${key}`}
                                    />
                            )} 

                            {  step == 10 && 
                                ["comida para llevar, rapida y similares",
                                "comida Sana, como de todo y equilibrado",
                                "me pierde todo que sea pasta, pizza, bocadillos, etc"]
                                .map((label, key) =>
                                    <FormInputs
                                        type="radio"
                                        key={key}
                                        name="meGustaComer"
                                        label={ label }
                                        value={ label }
                                        id={`gustaComer${key}`} />
                            )}
                            {  step == 11 && 
                                ["agua","refrescos y bebidas con gas","vino o cerveza"]
                                .map((label, key) =>                                                         
                                    <FormInputs
                                        type="radio"
                                        key={key}
                                        name="meGustaBeberConComida"
                                        label={ label }
                                        value={ label }
                                        id={`gustaBeber${key}`}
                                    />
                            )}
                            {  step == 12 &&
                                ["comer grandes cantidades de comida pero solo 3 veces al dia",
                                "picotear mucho","de cenar mucho y apenas desayunar y comer poco"]
                                .map((label, key) =>                                                        
                                    <FormInputs
                                        type="radio"
                                        key={key}
                                        name="habitosParaComer"
                                        label={ label }
                                        value={ label }
                                        id={`habitosComer${key}`}
                                    />
                            )}
                            {  step == 13 && 
                                ["trabajar fuera de casa",
                                "estoy en casa siempre","estudiar"]
                                .map((label, key) =>                                                       
                                    <FormInputs
                                        type="radio"
                                        key={key}
                                        name="miVidaDiariaEs"
                                        label={ label }
                                        value={ label }
                                        id={`vidaDiaria${key}`}
                                    />
                            )}
                            {  step == 14 &&

                                ["me encanta el deporte y le dedico una hora al dia por lo menos",
                                "practico deporte 2 a 3 veces por semana",
                                "un dia a la semana mas o menos",
                                "el Deporte y yo no nos llevamos bien"]
                                .map((label, key) =>                                                      
                                    <FormInputs
                                        type="radio"
                                        key={key}
                                        name="actividadFisica"
                                        label={ label }
                                        value={ label }
                                        id={`fisica${key}`}
                                    />
                            )}
                            {  step == 15 &&
                            ["quiero cambiar mi estilo de vida por completo",
                            "solo quiero adelgazar y quedarme en mi peso lo antes posible",
                            "quiero adelgazar pero no tengo prisa",
                            "quiero mejorar algunos de mis habitos"]
                             .map((label, key) =>                                   
                                <FormInputs                                    
                                    type="checkbox"
                                    key={key}
                                    name={`objetivos.${label}`}
                                    label={ label }
                                    value={ label }
                                    id={`objetivo${key}`} 
                                />
                            )}
                            
                            {  step == 16 && 
                            ["no me acuerdo",
                            "siempre estoy intentando adelgazar",
                            "hace menos de 3 meses"]
                             .map((label, key) =>                                   
                                <FormInputs                                    
                                    type="radio"
                                    key={key}
                                    name="ultimaVezQueintenteAdelgazar"
                                    label={ label }
                                    value={ label }
                                    id={`adelgazar${key}`} 
                                />
                            )}
                            {  step == 17 && 
                            ["que me dieran el máximo apoyo, necesito que me motiven",
                            "mentalizarme, necesito que me ayuden con eso",
                            "se lo que quiero, empecemos ya",
                            "adelgazar, Hacer ejercicio y conocer mas personas en mi situación",
                            "atención personalizada integral con un coach nutricional"]
                             .map((label, key) =>                                   
                                <FormInputs                                    
                                    type="checkbox"
                                    key={key}
                                    name={`meGustaria.${label}`}
                                    label={ label }
                                    id={`meGustaria${key}`} 
                                />
                            )}
                        </FormContainer>
                        <Row center>
                            <ButtonsStepper updateStep={ updateStep } step={ step }/>
                        </Row>
                    </Form>
                </Formik>
            </Container>
        </>
    )
}
export default Test
