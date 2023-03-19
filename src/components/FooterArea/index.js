import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import "./style.css";
const footerLinks = [
  {
    title: "BUCARAMANGA",
    menus: [
      { name: "Cra 35 # 46 – 112 Cabecera del llano" },
      { name: "(607) 697 15 65" },
      { name: "Cel: 316 480 44 40" },
      { name: "Encuentranos", route: "https://goo.gl/maps/HwZqTJJA1pEDivpS6" },
      { name: "" },
    ],
  },
  {
    title: "BOGOTA",
    menus: [
      { name: "BOGOTA, DC Cl 12B # 9 – 33 Of. 408, Edificio Sabanas" },
      { name: "PBX: (607) 697 15 65 Ext 115" },
      { name: "Cel: 316 480 44 40" },
      { name: "Encuentranos", route: "https://goo.gl/maps/yNWRwxnHMaqsSSs89" },
      { name: "" },
    ],
  },
  {
    title: "BARRANQUILLA",
    menus: [
      { name: "Calle 102 # 49 E-89 Edificio SOHO, Piso 12, Apto 1204B" },
      { name: "Tel: (605) 3 35 81 29" },
      { name: "PBX (7) 697 15 65 Ext 122" },
      { name: "Cel 312 530 46 50" },
      { name: "Encuentranos", route: "https://goo.gl/maps/Zwh2vnJD8DiQd75R7" },
    ],
  },
  {
    title: "TUNJA",
    menus: [
      {
        name: "Cl 17# 11 – 51 Of 203 Edificio Novocenter, Centro de Negocios y Especialidades",
      },
      { name: "Tel: (608) 741 04 84" },
      { name: "PBX: 697 15 65 Ext 119 – 120" },
      { name: "Cel: 311 440 3435" },
      { name: "Encuentranos", route: "https://goo.gl/maps/Jh7E2biGD2uHS6WZ9" },
    ],
  },
];

const FooterArea = () => {
  return (
    <footer className="footerArea">
      <div className="waButton">
        <div>
          <a href="https://wa.me/573172577184">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </div>
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
                        {item.route ? (
                          <Link to={{ pathname: item.route }} target="_blank">
                            {item.name}
                          </Link>
                        ) : (
                          `${item.name}`
                        )}
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
                <span>
                  Privacy Policy | © 2023 Rodriguez & Correa Abogados SAS.
                  Reservados todos los derechos
                </span>
              </div>
              <div className="col-md-4 col-sm-2 col-12">
                <ul className="socialListFooter">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterArea;
