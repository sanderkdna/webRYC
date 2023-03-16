import React from 'react'
import './style.css'

const services = [
    { icon: 'fi flaticon-lawyer', subtitle: '!Agenda ya', title: 'tú cita!' },
    { icon: 'fi flaticon-scale', subtitle: 'Gestionamos', title: 'tú cobranza' },
    { icon: 'fi flaticon-network', subtitle: 'Somos respaldo y asesoría ', title: 'jurídica' },
]
const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
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