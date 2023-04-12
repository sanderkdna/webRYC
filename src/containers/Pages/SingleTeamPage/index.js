import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
import ContactArea from '../../../components/ContactArea'

// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import team from '../../../images/Attorneys-single/1.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import './style.css'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Abogados', route: '/abogados' },
    { name: 'Gime Alexander Rodriguez' }
]
const teamMembarInfo = [
    { level: 'Cargo: ', text: 'Especializado en Derecho Laboral y Relaciones Industriales. Universidad externado de Colombia' },
    { level: 'Area de Ejercicio: ', text: 'Derecho Laboral, Relaciones Industriales' },
    { level: 'Experiencia: ', text: '+20 Años' },
    { level: 'Dirección: ', text: 'Cra 35 # 46 – 112 Cabecera del llano' },
    { level: 'Teléfono: ', text: '+57 3105547106.123.456' },
    { level: 'Email: ', text: 'info@rodriguezcorreaabogados.com' },
]
const teamContents = [
    'DERECHO LABORAL y RELACIONES INDUSTRIALES DE LA UNIVERSIDAD EXTERNADO DE COLOMBIA.',
    'ESPECIALIZACIÓN EN CONTRATACIÓN ESTATAL DE LA UNIVERSIDAD EXTERNADO DE COLOMBIA',
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SingleTeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Gime Alexander Rodriguez"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team} alt="" />
                                        </div>
                                        <h4>Gime Alexander Rodriguez</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamContent">
                                        <h4>Información Importante</h4>
                                        <ul className="teamMembarInfo">
                                            {teamMembarInfo.map((teamInfo, i) => (
                                                <li key={i}>
                                                    <span>{teamInfo.level}</span>
                                                    {teamInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="socialShare">
                                            <li><a href="https://www.facebook.com/rodriguezgime"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://www.instagram.com/rodriguezgimeabogado/?utm_medium=copy_link"><i className="fa fa-instagram"></i></a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>PERFIL</h3>
                                        <p>DR. GIME ALEXANDER RODRIGUEZ. Abogado Titulado, con especialización en:</p>
                                        <ul>
                                            {teamContents.map(teamContent => (
                                                <li key={teamContent}>{teamContent}</li>
                                            ))}
                                        </ul>
                                        <p>Con una trayectoria de más de Dieciocho (18) años en asesoría y consultoría de entidades de derecho público y privado; se ha desempeñado como Abogado externo de importantes firmas a nivel nacional e Internacional, Abogado litigante ante Despachos, Tribunales y Corte; Gestor y fundador de la firma RODRIGUEZ & CORREA ABOGADOS SAS.</p>
<p>Abogado, con amplia trayectoria con visión empresarial habiéndose destacado dentro de las empresas de asesoría jurídica integral, más reconocidas a nivel Local y estando en un nivel de posicionamiento Nacional, proyectando sus alcances de expansión a nivel Internacional.</p>
                                        <h5>EXPERIENCIA</h5>
                                        <h6>Gerente</h6>
                                        <p>Abogado, asesor en área laboral, civil, comercial tanto en industria pública y privada con amplia experiencia en el litigio y asesor integral de empresas Locales y Nacionales.</p>
                                        <h6>Abogado</h6>
                                        <p>Abogado de entidades de derecho público y privado, implementando sistemas de contratación laboral y comercial, defensas en litigios y representación ante jurisdicción administrativa y judicial.</p>
                                        <h5>EDUCACIÓN</h5>
                                        <h6>Pontificia Universidad Javeriana</h6>
                                        <p>Estudios en Insolvencia e Intervención – Reorganización Empresarial. 2018</p>
                                        <h6>Universidad Externado de Colombia</h6>
                                        <p>Especialización en Contratación Estatal, Estudios jurídicos, general. 2013 – 2014</p>
                                        <p>Promotor y especialista en Reorganizaciones Empresariales inscrito ante la Superintendencia de Sociedades.</p>
                                        <h6>Universidad Externado de Colombia</h6>
                                        <p>Especialista, Derecho Laboral y Relaciones Industriales. 2007 – 2008</p>
                                        <h6>Universidad Cooperativa de Colombia</h6>
                                        <p>Abogado, Laboralista. 1995 – 2000</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Portfolio
                title="Participated Case"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            /> */}
            <ContactArea
                className="contactArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default SingleTeamPage