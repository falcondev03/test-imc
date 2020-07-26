import React, { useState } from 'react'

const Mensaje = ({ imc }) => {
    
    const showMensaje = (imc) => {

        if(imc < 18.5)
            return `Usted está por debajo de su peso, pero podemos ayudarle a tener un peso óptimo de acuerdo a sus características físicas. También recuerde que podemos asesorarle en otro tipo de cuestiones relacionadas con la salud en general y en mejora física. Siempre que lo desee puede contactarnos desde la página de Oh-Style para darle la mejor información”
                ¡¡¡ Muchas Gracias !!!
               `
        if (imc >= 18.5 && imc <= 24.9)
            return `Usted está en un peso ideal, entendemos que está en un peso ideal. De todas maneras  podemos ayudarle a mejorar su condición física. También recuerde que podemos asesorarle en otro tipo de cuestiones relacionadas con nutrición y cambio de hábitos alimenticios. Siempre que lo desee puede contactarnos desde la página de Oh-Style para darle la mejor información, le estaremos esperando`  
        
        if(imc >= 25.0 && imc <= 29.9)
            return `Sería recomendable que perdiera peso puesto que está ligeramente por encima del peso que debería tener. Entre estos índices de IMC es que empiece con nosotros un plan nutricional basado en alimentación consciente, a fin de que pueda perder peso al ritmo que su cuerpo puede asimilar. La Alimentación Consciente es para enseñarle a comer de todo de manera que no solo no engorde más sino que además le proporcione todas las garantías necesarias para que logre la pérdida de peso deseada”. Nuestra recomendación es que sin ningún tipo de compromiso, se ponga en contacto con nosotros para que le podamos dar el soporte que realmente necesita y logre sus objetivos`
        if(imc > 30.0)
            return `Le recomendamos que adapte un nuevo estilo de vida y de alimentación para volver a estar en un peso saludable.  El índice de masa corporal que posee indica cierta urgencia, es decir, que es recomendable que empiece si programa de pérdida de peso lo antes posible. Cuánto antes empiece, mejor se encontrará. Nuestro Plan se basa en una Alimentación Consciente, un Apoyo Constante mediante Charla Grupal y el Apoyo a diario de su Coach Nutricional`
    }

    return (
        <div>
            <p className="text-justify">{ showMensaje(imc) }</p>
        </div>
    )
}

export default Mensaje
