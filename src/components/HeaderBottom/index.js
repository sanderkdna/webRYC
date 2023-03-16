import React, { useState, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import "./style.css";

const HeaderBottom = (props) => {
  const [search, setSearch] = useState();
  const [responsive, setResponsive] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };
  const clickHandler = () => {
    setTrigger(!trigger);
  };
  const responsiveHandler = () => {
    setResponsive(!responsive);
  };
  return (
    <div className={props.className}>
      <div className="containerFluid">
        <div className="headerBottomMainWrapper">
          <div className="row">
            <div className="col-lg-3 col-md-10 col-sm-6 col-8">
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
            </div>
            <div
              className={
                responsive
                  ? "col-lg-8 responsiveWrapper active"
                  : "col-lg-8 responsiveWrapper"
              }
            >
              <ul className="mainMenuWrap">
                <li>
                  <NavLink exact to="/about">
                    Organización
                  </NavLink>
                  <ul className="subMenu">
                    <li>
                      <NavLink exact to="/about">
                        Sobre Nosotros
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/practice-details">
                        Políticas para el tratamiento de datos personales
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/practice-details">
                        Sistema Integrado de Gestión
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/practice-details">
                        Protocolos de Bioseguridad
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/practice-details">
                        Galería
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/practice-details">
                        Pagos en Linea
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/practice-details">
                        Abogados
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink exact to="/practice">
                    COBERTURA
                  </NavLink>
                </li>

                <li>
                  <NavLink exact to="/case-stadies">
                  SERVICIOS
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/blog-left">
                  VIRTUAL LEGAL
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/attorneys">
                  CLIENTES
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/contact">
                  CONTACTO
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
