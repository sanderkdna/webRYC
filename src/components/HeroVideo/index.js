import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

class HeroSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Slider className={this.props.className} {...settings}>
        <div className="video-container">
          <video src={this.props.video} controls={false} autoPlay={true} muted={true} loop={true} />
        </div>
      </Slider>
    );
  }
}
export default HeroSlider;
