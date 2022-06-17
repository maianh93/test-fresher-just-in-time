import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "/images/logo-Blockchain-Japan-ltd.png";
import img2 from "/images/logo-dlex.png";
import img3 from "/images/logo-LR.png";
import img4 from "/images/logo-nebula.png";
import img5 from "/images/logo-nft3a.png";
import img6 from "/images/logo-Oddiyana.png";
import img7 from "/images/logo-r-startup-studio.png";
import img8 from "/images/logo-Reven-You.png";

import StyledSlider from "../Styles/Slider.styled";

const PromotionSlider: React.FC = () => {
  var settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <StyledSlider {...settings}>
      <div className="banner-item">
        <img className="banner" src={img1} alt="" />
      </div>
      <div className="banner-item">
        <img className="banner" src={img2} alt="" />
      </div>
      <div className="banner-item">
        <img className="banner" src={img3} alt="" />
      </div>
      <div className="banner-item">
        <img className="banner" src={img4} alt="" />
      </div>
      <div className="banner-item">
        <img className="banner" src={img5} alt="" />
      </div>
      <div className="banner-item">
        <img className="banner" src={img6} alt="" />
      </div>
      <div className="banner-item">
        <img className="banner" src={img7} alt="" />
      </div>
      <div className="banner-item">
        <img className="banner" src={img8} alt="" />
      </div>
    </StyledSlider>
  );
}

export default PromotionSlider;