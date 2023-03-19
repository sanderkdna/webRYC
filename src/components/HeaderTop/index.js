import React from "react";
import "./style.css";
const HeaderTop = (props) => {
  return (
    <div className={props.className}>
      <div className="containerFluid">
        <div className="headerTopMainWrapper">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-12 col-lg-4">
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
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 col-12 col-lg-4">
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
            <div className="col-md-4 col-sm-2 col-12 col-lg-4">
              <ul className="socialListFooter">
                <li>
                  <a href="https://www.facebook.com/rodriguezcorreaabogados" target={"_blank"}>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/rodriguezgime" target={"_blank"}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/rodriguezcorreaabogados?utm_medium=copy_link" target={"_blank"}>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <div className="btnStyle btnStyle2 text-right">
                    <a href="/contact">Contáctanos</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
