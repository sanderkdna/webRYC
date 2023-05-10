import React, { Fragment } from "react";
import CookieConsent from "react-cookie-consent";

import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import VirtualLegal from "../../../components/VirtualLegal";
import Locations from "../../../components/Locations";
import HeroVideo from "../../../components/HeroVideo";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Portfolio from "../../../components/Portfolio";
import Testmonial from "../../../components/Testmonial";
import ContactArea from "../../../components/ContactArea";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/DSC08765-2.jpeg";
import signature from "../../../images/about/1.png";

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

const aboutText = [
  {
    text: "RODRIGUEZ & CORREA ABOGADOS S.A.S está integrado por abogados especializados, ampliamente calificados en las diferentes áreas del derecho, con un alto perfil empresarial, ofreciendo herramientas legales y soluciones reales a las necesidades que presentan nuestros clientes, logrando de esta manera posesionarnos como una empresa comprometida prestando una Asesoría Integral a nivel local y nacional.",
  },
];

const heroSliders = [
  {
    images: "slideWrapperOne",
    title: "We Fight For Your Justice",
    subTitle: "As Like A Friend.",
    text: "The Most Talented Law Frim",
    button: "Contact us now",
  },
  {
    images: "slideWrapperTwo",
    title: "We Fight For Your Justice",
    subTitle: "As Like A Friend.",
    text: "The Most Talented Law Frim",
    button: "Contact us now",
  },
];

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
  { images: portfolio1, title: "Recaudo de Cartera", subtitle: "Corporativo" },
    { images: portfolio2, title: "Virtual Legal", subtitle: "General" },
    { images: portfolio3, title: "Asesoría Legal para Empresas", subtitle: "Negocios" },
    { images: portfolio4, title: "Derecho Comercial", subtitle: "Ayudas Empresariales" },
    { images: portfolio5, title: "Cuentas de Negocios", subtitle: "Problemas de Familia"},
];

const HomePageOne = () => {
  return (
    <>
      <Fragment>
        <header className="headerArea">
          <HeaderTop className="headerTop" />
          <HeaderBotton className="headerBottomArea" />
        </header>
        {/* <HeroSlider 
                  sliders={heroSliders}
                  className="heroSliderArea" /> */}
        <HeroVideo video={"/videos/corporativo.mp4"} className="heroSliderArea" />
        <Service className="serviceArea" />
        <VirtualLegal />
        <Locations />
        <About
          className="aboutArea"
          title="Sobre Nosotros"
          images={about}
          signature={signature}
          pragraphs={aboutText}
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
        <Testmonial className="testmonialArea" />
        <ContactArea className="contactArea" />
        <TeamMember
          title="Contamos con una amplia cartera de clientes, entre ellos se encuentran:"
          subTitle="Algunos de nuestros clientes"
          className="teamArea"
          slider={true}
        />
        <CounterArea className="counterArea" />
        {/* <BlogArea
          className="blogArea"
          title="Latest News"
          subTitle="From Our Blog
                  "
        /> */}
        {/* <NewsLetter className="newsLetterArea" /> */}
        <FooterArea />
      </Fragment>
      <CookieConsent
          location="top"
          buttonText="Acepto"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#C0B495", width: "50%", fontSize: "14px", color: "#FFFFFF", marginTop: "15%", marginLeft: "25%" }}
          buttonStyle={{ color: "#FFFFFF", fontSize: "16px", background:'#272C3F' }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </>
  );
};
export default HomePageOne;
