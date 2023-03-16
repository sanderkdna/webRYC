import React from "react";
import "./style.css";
const HeaderTop = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerTopMainWrapper">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-12 col-lg-5">
              <ul className="d-flex accountLoginArea">
                <li class="elementor-icon-list-item elementor-inline-item">
                  <a
                    href="http://coordinadordeprocesosjudiciales.com/"
                    target="_blank"
                  >
                    <span class="elementor-icon-list-icon">
                      <i className="fa fa-globe"></i>{" "}
                    </span>
                    <span class="elementor-icon-list-text">
                      Coordinador de Procesos{" "}
                    </span>
                  </a>
                </li>
                <li class="elementor-icon-list-item elementor-inline-item">
                  <a
                    href="https://procesos.coordinadordeprocesosjudiciales.com/login/"
                    target="_blank"
                  >
                    <span class="elementor-icon-list-icon">
                      <i className="fa fa-globe"></i>{" "}
                    </span>
                    <span class="elementor-icon-list-text">
                      Notificaciones Electrónicas
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-12 col-lg-5">
              <ul className="headerContact">
                <li>
                  <i className="fa fa-phone"></i>{" "}
                  <a href="tel:6076971565" target={"_blank"}>
                    (607) 697 15 65
                  </a>{" "}
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 8AM - 5PM
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="btnStyle btnStyle2 text-right">
                <a href="/contact">Contáctanos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
