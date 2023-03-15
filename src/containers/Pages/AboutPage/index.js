import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Testmonial from "../../../components/Testmonial";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/2.jpg";
import breadcumb from "../../../images/breadcumb/1.jpg";
import signature from "../../../images/about/1.png";

import "./style.css";

const aboutText = [
  {
    text: "RODRIGUEZ & CORREA ABOGADOS S.A.S, es una firma de origen Santandereana con más de 18 años de experiencia, gestada por el Dr. Gime Alexander Rodríguez, quien cuenta con una experiencia en el área del litigio y consultoría a Sociedades de Derecho Público y Privado, es Abogado especializado en Derecho Laboral, Relaciones Industriales y Especialización en Contratación Estatal, Egresado de la Universidad Externado de Colombia y representante legal de la firma RODRIGUEZ & CORREA ABOGADOS S.A.S, quien conformó un experimentado equipo de abogados y profesionales que desempeñan sus funciones con eficiencia, calidad y un alto sentido de compromiso y responsabilidad.",
  },
  {
    text: "RODRIGUEZ & CORREA ABOGADOS S.A.S está integrado por abogados especializados, ampliamente calificados en las diferentes áreas del derecho, con un alto perfil empresarial, ofreciendo herramientas legales y soluciones reales a las necesidades que presentan nuestros clientes, logrando de esta manera posesionarnos como una empresa comprometida prestando una Asesoría Integral a nivel local y nacional.",
  },
  {
    text: "Se cuenta con capacidad económica y estructura administrativa para representar a todos y cada uno de nuestros clientes, brindando respaldo y asesoría jurídica para la toma de decisiones.",
  },
  {
    text: "Para brindar un mayor cubrimiento Nacional, la organización está conformada por una oficina principal en la ciudad de Bucaramanga y sucursales en las ciudades de Bogotá, Barranquilla y Tunja, con una centralización administrativa y operativa, implementada a un centro tecnológico de última generación que cuenta con una infraestructura basada en los estándares de seguridad informática.",
  },
];
const misionText = [
  {
    text: "Brindar servicios jurídicos integrales de la más alta calidad profesional en las diferentes áreas del derecho y recaudo de cartera judicial y extrajudicial para entidades del sector público y privado, siguiendo parámetros de excelencia, eficiencia y resultados.",
  },
  {
    text: "Prestar servicios profesionales en las diferentes ramas del derecho, de manera responsable, honesta, eficiente, y con un alto grado de prestigio, equidad y justicia, generando propuestas contundentes, innovadoras, creativas y funcionales, que fructifiquen en el éxito de los proyectos para nuestros clientes.",
  },
  {
    text: "Proporcionando una esmerada atención a través de nuestros profesionales con amplia experiencia y sólida preparación académica, con el fin de satisfacer las necesidades de nuestros clientes que son la razón de ser de nuestra organización.",
  },
];
const visionText = [
    { text: 'En el año 2025, ser reconocida a nivel nacional como la mejor firma de abogados, en todas las ramas del derecho, manteniendo los más altos niveles de satisfacción, éxito, con elevada credibilidad y excelencia para nuestros clientes. Ser una firma líder con prestigio nacional e internacional innovadora, confiable y transparente, comprometida a facilitar y mejorar la calidad de vida de nuestros clientes, ofreciendo oportunidades de desarrollo profesional y personal a nuestros integrantes.' },
    ];

const services = [
  {
    icon: "flaticon-parents",
    title: "Family Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-wounded",
    title: "Personal Injury",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-employee",
    title: "Business Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-thief",
    title: "Criminal Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-university-graduate-hat",
    title: "Education Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-house",
    title: "Real Estate Law",
    content: "There are many variations of passages of Lorem ",
  },
];

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "About us" }];

const AboutPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="About Us"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />
      <Service className="serviceArea mt-0" />
      <About
        className="aboutArea aboutAreaStyleTwo"
        title="RESEÑA HISTÓRICA"
        subTitle="RODRIGUEZ & CORREA ABOGADOS S.A.S"
        images={about}
        orderLast="order-last"
        videoId="XxVg_s8xAms"
        pragraphs={aboutText}
      />
      <About
        className="aboutArea"
        title="Misión"
        images={about}
        signature={signature}
        pragraphs={misionText}
      />
      <About
        className="aboutArea aboutAreaStyleTwo"
        title="Visión"
        images={about}
        orderLast="order-last"
        videoId="XxVg_s8xAms"
        pragraphs={visionText}
      />
      <ServiceArea
        className="ourServiceArea ourServiceAreaStyleTwo"
        title="How Can We Help You"
        subTitle="Area Of Practice"
        services={services}
      />
      <Testmonial className="testmonialArea pt100" />
      <CounterArea
        fullWidth={true}
        className="counterArea counterAreaStyleTwo"
      />
      <TeamMember
        title="Qualified Attorneys "
        subTitle="Meet Our Experts"
        className="teamArea"
        slider={true}
      />
      <BlogArea
        className="blogArea"
        title="Latest News"
        subTitle="From Our Blog
                "
      />
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default AboutPage;
