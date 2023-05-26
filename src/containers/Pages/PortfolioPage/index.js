import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import ServiceArea from "../../../components/ServiceArea";
import Portfolio from "../../../components/Portfolio";
// images
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";
import portfolio4 from "../../../images/studies/4.jpg";
import portfolio5 from "../../../images/studies/5.jpg";

//images services
import servicesasesorias from "../../../images/services/servicesasesorias.png";
import servicesrecaudo from "../../../images/services/servicesrecaudo.png";
import servicesvirtuallegal from "../../../images/services/servicesvirtuallegal.png";

// images
import breadcumb from '../../../images/breadcumb/1.jpg'


import './style.css'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Servicios' }
]




const services = [
    {
      icon: servicesasesorias,
      title: "Asesoría y Consultoría Juridica",
      link: "https://rodriguezcorreaabogados.com/docs/PORTAFOLIO_ASESORIA_Y_CONSULTORIA_JURIDICA_2020.pdf",
      content:
        "#resumen en una frase",
    },
    {
      icon: servicesrecaudo,
      title: "Recaudo de Cartera",
      link: "https://rodriguezcorreaabogados.com/docs/RECAUDO_DE_CARTERA_2020_WEB.pdf",
      content:
        "#resumen en una frase",
    },
    {
      icon: servicesvirtuallegal,
      title: "Virtual Legal",
      link: "https://rodriguezcorreaabogados.com/docs/PORTAFOLIO_VIRTUAL_LEGAL_2021.pdf",
      content:
        "#resumen en una frase",
    },
  ];
  
  const portfolioItem = [
    { images: portfolio1, title: "Recaudo de Cartera", subtitle: "" },
    { images: portfolio2, title: "Virtual Legal", subtitle: "" },
    { images: portfolio3, title: "Asesoría Legal para Empresas", subtitle: "" },
    { images: portfolio4, title: "Derecho Comercial", subtitle: "" },
    { images: portfolio5, title: "Insolvencia y reorganización empresarial", subtitle: ""},
  ];

const PortfolioPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton
                    className="headerBottomArea headerBottomAreaStyelTwo"
                />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Servicios"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <ServiceArea
                    className="ourServiceArea"
                    title="Visualiza nuestros Portafolios de Servicios"
                    subTitle="Somos Especialistass"
                    services={services}
                />
                <Portfolio
                    className="portfolioArea"
                    title="Conoce nuestro portafolio de servicios de manera detallada"
                    subTitle="Descubre porque somos la mejor opción"
                    portfolioItem={portfolioItem}
                />
            <FooterArea />
        </Fragment>
    )
}
export default PortfolioPage