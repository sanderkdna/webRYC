import React from 'react'
import Form from '../Form'
import './style.css'
const ContactArea = ({ className }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="contactInfo">
                            <span>Si deseas conococer nuestros servicios</span>
                            <h2>Escribenos aqui!</h2>
                            <h6>Llamanos 24/7 al Cel: 316 480 44 40 o diligencia el siguiente formulario.</h6>
                            <p>
                                Estamos dispuestos a atender tus inquietudes y dudas.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <Form 
                            addressInfo={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactArea