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
import team from '../../../images/Attorneys-single/sig.png'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

const breadcumbMenu = [
    { name: 'Inicio', route: '/' },
    { name: 'Sistema Inegrado de Gestión', route: '/sistema-integrado-gestion   ' },
]
const teamMembarInfo = [
    { level: 'Positon: ', text: 'Siniour Lawyer' },
    { level: 'Practice Area: ', text: 'Family Lawyer, Criminal Defence, Personal Injury' },
    { level: 'Experience: ', text: '10 Years' },
    { level: 'Address: ', text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
    { level: 'Phone: ', text: '0800.123.456' },
    { level: 'Email: ', text: 'youremail@gmail.com' },
    { level: 'Fax: ', text: ' 6985231456' },
]
const teamContents = [
    'Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
    'Academy University School of Law, Boston, MA',
    'The Syntify High School Of New York',
    'Education & Court Admissions',
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SitemaGestion = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>1.- POLITICA DE CALIDAD</h3>
                                        <p>RODRIGUEZ & CORREA Abogados S.A.S, provee asesoría, consultoría jurídica y recaudo de Cartera judicial y extrajudicial mediante la prestación de servicios de la más alta calidad profesional en las diferentes áreas del derecho soportadas en la actitud, servicio al cliente, buenas prácticas éticas, fomento de responsabilidad, transparencia en cada uno de los procesos y en la relación con nuestros grupos de interés.</p>
                                        <p>Satisfacer las necesidades y expectativas de los clientes es nuestra prioridad, mediante el cumplimiento de requisitos y los legales aplicables a la organización. Nuestro compromiso es la calidad para la consecución de la excelencia en nuestros servicios y el cumplimiento de objetivos.</p>
                                        <p>La alta dirección destina los recursos necesarios y facilita la formación de todos sus colaboradores asegurando la comprensión de esta política, su participación dentro del Sistema de Gestión de la calidad y el aseguramiento de la mejora continua.</p>
                                        
                                        <h5>2.- OBJETIVOS DE CALIDAD</h5>
                                        <p>En el marco del cumplimiento de nuestra política de calidad, hemos desarrollado un modelo de gestión basado en la calidad que aporta valor a la organización, bajo los siguientes compromisos:</p>
                                        <ul>
                                            <li>Brindar asesoría y consultoría profesional, oportuna a nuestros clientes a través de la calidad en el servicio, la satisfacción y el cumplimiento de sus requisitos.</li>
                                            <li>Cumplir con las exigencias de metas de recaudos a largo y corto plazo de conformidad con los presupuestos requeridos por cada cliente.</li>
                                            <li>Cumplir con la normatividad vigente nacional y otros requisitos que haya suscrito Rodríguez & Correa S.A.S</li>
                                            <li>Fomentar la participación y motivación del personal en el Sistema de gestión de la calidad a través de la asignación de recursos y el compromiso de la alta dirección.</li>
                                            <li>Asegurar el crecimiento y el mantenimiento del Sistema de Gestión de la calidad a través de la mejora continua, reflejado en la excelencia de nuestros servicios. </li>
                                        </ul>

                                        <h5>3.- POLITICA DE SEGURIDAD Y SALUD EN EL TRABAJO</h5>
                                        <p>En RODRIGUEZ & CORREA Abogados S.A.S, nos dedicamos a brindar servicios jurídicos integrales y al recaudo de cartera judicial y extrajudicial de la más alta calidad, comprometidos por mantener y mejorar la salud individual y colectiva de nuestros trabajadores y contratistas, teniendo como propósito dentro de nuestro Sistema de Gestión de la Seguridad y Salud en el trabajo la prevención de los accidentes de trabajo, lesiones personales y enfermedades laborales.</p>
                                        <p>La Alta Dirección asigna los recursos necesarios para implementar, mantener y mejorar continuamente la protección de todos sus colaboradores y la eficacia del Sistema de Seguridad y Salud en el trabajo; su compromiso es garantizar la identificación, evaluación, control y/o elimina­ción de los riesgos presentes en las diferentes actividades desarrolladas en la organización.</p>
                                        <p>Promover y garantizar una cultura de seguridad y salud en el trabajo es una responsabilidad de todo el personal, reflejado en el cumplimiento de normas, procedimientos y requisitos establecidos en la legislación colombiana vigente en materia de seguridad y salud en el trabajo, así como la exigencia y vigilancia de los mismos a proveedores, subcontratistas, visitantes y partes interesadas.</p>

                                        <h5>4.- OBJETIVOS DE SEGURIDAD Y SALUD EN EL TRABAJO</h5>
                                        <p>Efectuar continuamente la identificación de peligros, valoración y evaluación de riesgos, para implementar mecanismos adecuados que permitan establecer controles eficientes.</p>
                                        <p>Implementar actividades en pro del cumplimiento a la legislación Colombiana vigente en materia de seguridad y salud en el trabajo y de otra índole aplicable a la actividad económica de Rodríguez & Correa Abogados.</p>
                                        <p>Desarrollar actividades de promoción y prevención que permitan mejorar las condiciones de trabajo y de salud del personal, así como el mejoramiento continuo de los métodos y procedimientos de trabajo en la organización.</p>

                                        <h5>5.- POLITICA DE NO ALCOHOL, DROGAS Y TABACO</h5>
                                        <p>RODRÍGUEZ & CORREA ABOGADOS S.A.S se compromete a proporcionar a sus empleados un ambiente laboral seguro que esté libre de los efectos de las drogas ilegales, del alcohol y el tabaquismo.</p>
                                        <p>La distribución, posesión o uso ilegal, o estar bajo la influencia de drogas ilegales o de alcohol en el trabajo o en las instalaciones de la empresa está prohibido, y quién lo realizare será pasible de despido con causa, excepto en casos de uso individual de drogas o medicamentos recetados, legalmente obtenidos y el consumo de bebidas alcohólicas relacionado con un evento autorizado en las instalaciones de la empresa.</p>
                                        <p>Todos los empleados están sujetos a pruebas cuando sea aparente que se encuentran bajo la influencia de drogas o alcohol durante el trabajo, o cuando tenemos alguna otra razón para creer que el empleado está violando la política.</p>
                                        <p>La firma tomará las acciones disciplinarias necesarias en caso de incumplimiento a la presente política y realizara acciones que propendan a la mejora continua de los trabajadores, también se realizarán pruebas de consumo de alucinógenos de acuerdo a la necesidad e indicaciones de la firma.</p>

                                        <h5>6.- MAPA DE PROCESOS</h5>
                                        <img src={team} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default SitemaGestion