// import axios from "axios"
import { Form, Formik } from "formik"
import { MDBContainer as Container, MDBRow as Row, MDBFooter as Footer, MDBCol as Col } from 'mdbreact'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ButtonsStepper from "./buttonsStepper"
import { FormContainer, FormInputs } from "./form"
import Stepper from "./stepper"
import Header from "./header"
import InputRadio from "./inputs/InputRadio"
import InputCheckbox from "./inputs/inputCheckbox"
import Chart from "./chart"

const Test = () => {
    const [step, setStep] = useState(0)
    const [imcResult, setImcResult] = useState(0)
    const [pesoChart, setPesoChart] = useState(0)
    const [pesoIdealChart, setPesoIdealChart] = useState(0)
    
    const preguntas = [
        <p className="font-weight-bold">¿Cual es el <span className="text-line">peso ideal</span> al que quieres llegar?</p>,
        <p className="font-weight-bold">¿Cual es tu altura y peso?</p>,
        <p className="font-weight-bold">¿Cual es tu sexo?</p>,
        <p className="font-weight-bold">¿Cual es tu edad?</p>,
        <p className="font-weight-bold">¿Sufre de alguna de estas patologias?</p>,
        <p className="font-weight-bold">Mi Ritmo de Vida es:</p>,
        <p className="font-weight-bold">Yo como...</p>,
        <p className="font-weight-bold">Mi estilo de vida es..</p>,
        <p className="font-weight-bold">Salgo a Comer Fuera...</p>,
        <p className="font-weight-bold">El tiempo que tengo para cocinar es...</p>,
        <p className="font-weight-bold">Lo que mas me gusta comer es...</p>,
        <p className="font-weight-bold">Suelo beber con las comidas...</p>,
        <p className="font-weight-bold">Yo soy de...</p>,
        <p className="font-weight-bold">Mi vida diaria es...</p>,
        <p className="font-weight-bold">Mi actividad fisica es...</p>,
        <p className="font-weight-bold text-line">Objetivos</p>,
        <p className="font-weight-bold">La ultima vez que intente adelgazar fue...</p>,
        <p className="font-weight-bold">Me gustaria...</p>,
        <p className="font-weight-bold">Ingresa tu correo electrónico para que te podamos enviar un informe completo:</p>

    ] 
    const fields = 
        [
            ["diabetes","tensionArterial","problemasCardiacos","problemasEndocrinos","problemasRenales","problemasHormonales", "ninguna"]
        ]

    const validateTest = Yup.object({
        pesoIdeal: Yup.string().required("Campo requerido"),
        altura: Yup.string().required("Campo requerido"),
        peso: Yup.string().required("Campo requerido"),
        sexo: Yup.string().required("Campo requerido"),
        edad: Yup.string().required("Campo requerido"),
        patologias: Yup.array(Yup.string()).required("Campo requerido"),
        ritmoVida: Yup.string().required("Campo requerido"),
        dieta: Yup.string().required("Campo requerido"),
        estiloVida: Yup.string().required("Campo requerido"),
        frecuenciaComerFuera: Yup.string().required("Campo requerido"),
        tiempoParaCocinar: Yup.string().required("Campo requerido"),
        meGustaComer: Yup.string().required("Campo requerido"),
        meGustaBeberConComida: Yup.string().required("Campo requerido"),
        habitosParaComer: Yup.string().required("Campo requerido"),
        miVidaDiariaEs: Yup.string().required("Campo requerido"),
        actividadFisica: Yup.string().required("Campo requerido"),
        objetivos: Yup.array(Yup.string()).required("Campo requerido"),
        ultimaIntenteAdelgazar: Yup.string().required("Campo requerido"),
        meGustaria: Yup.array(Yup.string()).required("Campo requerido"),
        email: Yup.string().email("Debe poner un email valido").required("Campo requerido"),
    })

    const updateStep = stepper => {
        setStep(stepper)
    }
    //const sendFormInputs = () => {
        // funciones de axios
   // }
    

    return(
        <>
            <Header color="purple-gradient" dark/>
            <Container style={{ height:"500px" }}>
                <Formik 
                    initialValues={{
                        pesoIdeal:"",
                        altura:"",
                        peso:"",
                        sexo:"",
                        edad:"",
                        patologias:"",
                        // {
                        //     diabetes:false,
                        //     tensionArterial:false,
                        //     problemasCardiacos:false,
                        //     problemasEndocrinos:false,
                        //     problemasRenales:false,
                        //     problemasHormonales:false,
                        //     ninguna:false
                        // },
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
                        objetivos: "",
                        // {
                        //     quiero_cambiar_mi_estilo_de_vida_por_completo:false,
                        //     solo_quiero_adelgazar_y_quedarme_en_mi_peso_lo_antes_posible:false,
                        //     quiero_adelgazar_pero_no_tengo_prisa:false,
                        //     quiero_mejorar_algunos_de_mis_habitos:false
                        // },
                        ultimaIntenteAdelgazar:"",
                        meGustaria:"",
                        // {
                        //     que_me_dieran_el_máximo_apoyo_necesito_que_me_motiven:false,
                        //     mentalizarme_necesito_que_me_ayuden_con_eso:false,
                        //     se_lo_que_quiero_empecemos_ya:false,
                        //     adelgazar_hacer_ejercicio_y_conocer_mas_personas_en_mi_situacion:false,
                        //     atencion_personalizada_integral_con_un_coach_nutricional:false
                        // },
                        email:"",
                    }}
                    validationSchema={ validateTest }
                    onSubmit={values => {
                        if(step !== 19) return updateStep(step + 1)
                        if(step == 19){
                            setPesoChart(values.peso)
                            setPesoIdealChart(values.pesoIdeal)
                        }
                    }}
                    >
                    <Form>
                        <FormContainer title={ (preguntas[step]) }>

                            { step == 0 && <FormInputs type="number" name="pesoIdeal" id="pesoIdeal" append="kg" />}
                            { step == 1 && <FormInputs type="number" name="altura" id="altura" append="cm" /> }
                            { step == 1 && <FormInputs type="number" name="peso" id="peso" append="kg"/> } 

                            {  step == 2 && ["masculino", "femenino"].map((label, key) =>
                                <Row center>
                                  <Col size="5" sm="3" md="2" lg="2" xl="2" className="pl-lg-4 pl-xl-5">
                                    <div className="alineacion">
                                      <InputRadio key={ key } label={ label } type="radio" value={ label } name="sexo" id={ `sexo${key}` }/>
                                    </div>
                                  </Col>
                                </Row>

                            )} 

                            {  step == 3 && ["18-24", "25-34", "35-44", "45-54", "55 o mas"].map((label, key)=>
                              <Row center>
                                  <Col size="5" sm="3" md="2" lg="2" xl="2" className="pl-lg-5 pl-xl-5">
                                      <div className="alineacion">
                                          <InputRadio label={ label } key={ key } type="radio" value={ label } name="edad" id={ `edad${key}` }/>
                                      </div>
                                  </Col>
                              </Row>
                            )} 

                            {  step == 4 && 
                                ["Diabetes",
                                "Tension arterial",
                                "Problemas cardiacos",
                                "Problemas endocrinos",
                                "Problemas renales",
                                "Problemas hormonales",
                                "No sufro ninguna"]
                                .map((label, key)=>
                                  <Row end>
                                    <Col size="10" sm="8" md="8" lg="8" xl="8" className="pl-md-5 pl-lg-5 pl-xl-5">
                                      <div className="alineacion pl-lg-4 pl-xl-5">
                                        <InputCheckbox
                                            key={ key }
                                            label={ label }
                                            type="checkbox"
                                            name="patologias"
                                            value={ label }
                                            id={`patologias${key}`}
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                            )}

                            {  step == 5 && 
                                ["desenfrenado y estresante",
                                "relativamente tranquilo",
                                "muy tranquilo"]
                                .map((label, key) =>
                                <FormInputs
                                    type="radio"
                                    key={key}
                                    name="ritmoVida"
                                    label={ label }
                                    value={ label }
                                    id={`vida${key}`}
                                />
                            )} 

                            {  step == 6 &&
                                ["3 veces al dia",
                                "5 veces al dia y con 3 horas de diferencia entre comidas",
                                "por impulsos"]
                                .map((label, key) =>
                                    <FormInputs
                                        type="radio"
                                        key={key}
                                        name="dieta"
                                        label={ label }
                                        value={ label }
                                        id={`dieta${key}`}
                                    />
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
                                    name="objetivos"
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
                                    name="ultimaIntenteAdelgazar"
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
                                    name="meGustaria"
                                    label={ label }
                                    value={ label }
                                    id={`meGustaria${key}`} 
                                />
                             )}
                            { step === 18 && 
                                    <FormInputs 
                                        type="text"
                                        name="email"
                                        label="Email:"
                                        id="email"
                                    />
                            }

                            {step === 19 &&
                                <Chart
                                    imc={imcResult}
                                    peso={ pesoChart }
                                    pesoIdeal={ pesoIdealChart }
                                />
                            }
                            </FormContainer>
                                
                        <footer className="fixed-bottom"> 
                            <Footer color="white"> 
                                <Row center>
                                    <ButtonsStepper updateStep={ updateStep } step={ step }/>
                                </Row>
                                <div style={{ paddingTop:"10px", paddingLeft:"5px", paddingRight:"5px", paddingBottom:"10px" }}>
                                    <Stepper step={ step }/>
                                </div>
                            </Footer>
                        </footer>  
                    </Form>
                </Formik>
            </Container>
        </>
    )
}
export default Test
