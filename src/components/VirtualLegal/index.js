import React from "react";
import virtual_legal from "../../images/VirtualLegal/virtual-legal.png";

const VirtualLegal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={virtual_legal} alt="Imagen" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div>
            <div className="btnStyle btnStyle2">
              <a
                href="https://coordinadordeprocesosjudiciales.com/login/"
                target={"_blank"}
              >
                Iniciar sesión
              </a>
            </div>
            <div className="btnStyle btnStyle2">
              <a
                href="https://coordinadordeprocesosjudiciales.com/consultapublica/registro/"
                target={"_blank"}>
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualLegal;
