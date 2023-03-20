import React from 'react'
import './style.css'

const services = [
    { icon: 'fi flaticon-lawyer', subtitle: 'Rodriguez & Correa Abogados', title: 'Contamos con capacidad económica y estructura administrativa para representar a todos y cada uno de nuestros clientes, brindando respaldo y asesoría jurídica para la toma de decisiones.' },
    { icon: 'fi flaticon-scale', subtitle: 'Gestionamos', title: 'Somos la respuesta más efectiva en la gestión de cobranzas de su empresa.' },
]
const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-6 col-md-6">
                            <div className="serviceItem">
                                <div className="serviceIcon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="serviceText">
                                    <span>{service.subtitle}</span>
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Service