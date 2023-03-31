import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.css'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]

const ContactPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className="contactusPageArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contactUsInfo">
                                <h3>Tienes más Preguntas</h3>
                                <p>Ingresa a nuestro sistema de PQR y envianos tus inquietudes.
                                </p>
                                <h4>Dirección</h4>
                                <span>Cra 35 # 46 – 112 Cabecera del llano, Bucaramanga - Santander</span>
                                <h4>Teléfono</h4>
                                <span>(607) 697 15 65</span>
                                <span>Cel: 316 480 44 40</span>
                                <h4>Email</h4>
                                <span>info@rodriguezcorreaabogados.com</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contactUSForm">
                                <h3>Quick Contact Form</h3>
                                <Form
                                    addressInfo={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <NewsLetter
                className="newsLetterArea"
            /> */}
            <FooterArea />
        </Fragment>
    )
}
export default ContactPage