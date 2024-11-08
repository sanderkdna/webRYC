import React from "react";
import barranquilla from "../../images/locations/locations.png";
// import bogota from "../../images/locations/bogota.jpeg";
// import bucaramanga from "../../images/locations/bucaramanga.jpeg";
// import donde_estamos from "../../images/locations/donde-estamos.jpeg";
// import tunja from "../../images/locations/tunja.jpeg";

import "./style.css";

const locations = [barranquilla];

const Locations = () => {
  return (
    <div class="row">
      <div class="container">
        <div class="d-flex align-items-center justify-content-center">
          {locations.map((location) => (
            <img src={location} alt="location" className="location_img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
