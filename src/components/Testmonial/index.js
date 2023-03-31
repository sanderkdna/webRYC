import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

// images
import testmonial from '../../images/testimonial/DSC09397-2.jpeg'
import testmonial2 from '../../images/testimonial/2.png'

const sliders = [
    {
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
        images: testmonial2,
        title: 'Jhony Goaver',
        subTitle: 'CEO of American BDS'
    },
    {
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
        images: testmonial2,
        title: 'Jhony Goaver',
        subTitle: 'CEO of American BDS'
    }
]
const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
const Testmonial = ({ className }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="testimonialImages">
                            <img src={testmonial} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="testimonialContent">
                            <h2>Rodriguez & Correa Abogados</h2>
                            <div className="testmonialSlider">
                                <div className="slideItem">
                                    <p>
                                        Hemos recorrido muchos años de esfuerzos conjuntos, con las vicisitudes propias de nuestro
                                        oficio, pero que una vez superadas, nos permiten avanzar con pasos firmes y llenos de decisión
                                        por alcanzar cada meta que nos proponemos, buscando brindar a nuestra comunidad siempre
                                    lo mejor de cada uno como presiónales del derecho e integrantes de la sociedad.
                                    <br /><br />
                                        Hacer empresa me llena de satisfacción, pero es mejor aún ver cómo cumplimos a cabalidad
                                        con los objetivos propios y los de nuestra sociedad, una comunidad que requiere de gestión
                                        diligente, honesta, honrada y con resultados óptimos alcanzados por un equipo
                                        interdisciplinario capacitado constante y eficiente que nos ubican en un alto nivel de calidad y
                                    efectividad en gestiones empresariales y del derecho.
                                    <br /><br />
                                        Estamos comprometidos con nuestro país, preparandonos para asumir día a dia los retos que
                                        esta maravillosa profesion nos demanda tanto en el sector publico como privado, con
                                        objetivos claros y logros alcanzados que nos llevan a permanecer en la labor jurídica y nos
                                        ubican como una de las mejores firmas de abogados del país en cada una de las áreas del
                                    derecho.
                                    <br /><br />
                                        Cada dia son mas las empresas y sectores que confían en nuestro trabajo y han puesto en
                                        nuestras manos su patrimonio y decisiones, por lo que es un compromiso asumir siempre
                                        nuevos retos, en procura de obtener éxito total, obviamente con trasparencia, justicia y
                                    equidad en cada una de nuestras actuaciones.
                                    <br /><br />
                                        Es mucho el camino por recorrer, pero estamos aquí, al servicio y atentos a las soluciones que
                                        día a día creamos para ofrecer a ustedes, nuestros clientes, con los mas altos estándares de
                                        calidad y de gestión, buscando una comunidad jurídica, sostenible, basada en los reglamentos
                                        y estatutos, debido proceder e impregnadas de seriedad.
                                    </p>
                                </div>
                            </div>
                            {/* <Slider className="testmonialSlider" {...settings}>
                                {sliders.map((slider, i) => (
                                    ))}
                            </Slider> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testmonial