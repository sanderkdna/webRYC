import React from "react";
import "./style.css";
const HeaderTop = (props) => {
  return (
    <div className={props.className}>
      <div className="containerFluid">
        <div className="headerTopMainWrapper">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 col-lg-8">
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
            <div className="col-md-6 col-sm-12 col-12 col-lg-4">
              <ul className="headerContact">
                <li>
                  <i className="fa fa-phone"></i>{" "}
                  <a href="tel:6076971565" target={"_blank"}>
                    (607)  6971565
                  </a>{" "}
                </li>
                <li><a href="https://www.facebook.com/rodriguezcorreaabogados" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/rodriguezgime" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&hd=rodriguezcorreaabogados.com&sacu=1&flowName=GlifWebSignIn&flowEntry=AddSession" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                <li><a href="https://instagram.com/rodriguezcorreaabogados?utm_medium=copy_link" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
