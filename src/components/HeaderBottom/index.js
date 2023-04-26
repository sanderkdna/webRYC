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
                      <NavLink exact to="/documentos">
                        Políticas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/sistema-integrado-gestion">
                        Sistema Integrado de Gestión
                      </NavLink>
                    </li>
                    <li>
                      
                      <NavLink exact to="/gallery">
                        Galería
                      </NavLink>
                    </li>
                    <li>
                      <Link to={{ pathname: "https://checkout.wompi.co/l/znJdOy" }} target="_blank">
                          Pagos en Linea
                      </Link>
                    </li>
                    <li>
                      <NavLink exact to="/abogados">
                        Abogados
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink exact to="/cobertura">
                    COBERTURA
                  </NavLink>
                </li>

                <li>
                  <NavLink exact to="/services">
                  SERVICIOS
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/virtual-legal">
                  VIRTUAL LEGAL
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/clientes">
                  CLIENTES
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/contact">
                  PQR
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-6 col-4">
              <div className="searchMenuWrapper">
                  <div onClick={responsiveHandler} className="responsiveTrigger">
                      <span className="first"></span>
                      <span className="second"></span>
                      <span className="third"></span>
                  </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
