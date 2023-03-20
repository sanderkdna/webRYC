import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import './style.css'
const footerLinks = [
    {
        title: 'BUCARAMANGA', menus: [
            { name: 'Cra 35 # 46 – 112 Cabecera del llano', icon:'fa fa-location-arrow iconcontact' },
            { name: '(607) 697 15 65', icon:'fa fa-phone iconcontact'  },
            { name: 'Cel: 316 480 44 40', icon:'fa fa-phone iconcontact' },
            { name: 'Encuentranos', route: 'https://goo.gl/maps/HwZqTJJA1pEDivpS6', icon:'fa fa-map iconcontact' },
        ]
    },
    {
        title: 'BOGOTA', menus: [
            { name: 'BOGOTA, DC Cl 12B # 9 – 33 Of. 408, Edificio Sabanas', icon:'fa fa-location-arrow iconcontact'  },
            { name: 'PBX: (607) 697 15 65 Ext 115', icon:'fa fa-phone iconcontact'  },
            { name: 'Cel: 316 480 44 40', icon:'fa fa-phone iconcontact'  },
            { name: 'Encuentranos', route: 'https://goo.gl/maps/yNWRwxnHMaqsSSs89', icon:'fa fa-map iconcontact' },
        ]
    },
    {
        title: 'BARRANQUILLA', menus: [
            { name: 'Calle 102 # 49 E-89 Edificio SOHO, Piso 12, Apto 1204B', icon:'fa fa-location-arrow iconcontact'  },
            { name: 'Tel: (605) 3 35 81 29', icon:'fa fa-phone iconcontact'  },
            { name: 'PBX (7) 697 15 65 Ext 122', icon:'fa fa-phone iconcontact'  },
            { name: 'Cel 312 530 46 50', icon:'fa fa-phone iconcontact'  },
            { name: 'Encuentranos', route: 'https://goo.gl/maps/Zwh2vnJD8DiQd75R7', icon:'fa fa-map iconcontact' },
        ]
    },
    {
        title: 'TUNJA', menus: [
            { name: 'Cl 17# 11 – 51 Of 203 Edificio Novocenter, Centro de Negocios y Especialidades', icon:'fa fa-location-arrow iconcontact'  },
            { name: 'Tel: (608) 741 04 84', icon:'fa fa-phone iconcontact'  },
            { name: 'PBX: 697 15 65 Ext 119 – 120', icon:'fa fa-phone iconcontact'  },
            { name: 'Cel: 311 440 3435', icon:'fa fa-phone iconcontact'  },
            { name: 'Encuentranos', route: 'https://goo.gl/maps/Jh7E2biGD2uHS6WZ9', icon:'fa fa-map iconcontact' },
        ]
    },
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                            </div>
                        </div> */}
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}>
                                                <i className={item.icon} aria-hidden="true"></i>
                                                {item.route ? <Link to={{ pathname: item.route}} target="_blank">{item.name}</Link> : `${item.name}`}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="footerBottomContent">
                        <div className="row">
                            <div className="col-md-8 col-sm-10 col-12">
                                <span>Privacy Policy | © 2023 Rodriguez & Correa Abogados SAS. Reservados todos los derechos</span>
                            </div>
                            <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wp-content">
                <a href="https://web.whatsapp.com/send?phone=573112968532&text=Buenos%20d%C3%ADas%20se%C3%B1ores%20Virtual%20Legal%2C%20el%20d%C3%ADa%20de%20hoy%20tengo%20la%20siguiente%20consulta%3A" target="_blank" class="wp-link fa fa-whatsapp"></a>
            </div>
        </footer>
    )
}
export default FooterArea