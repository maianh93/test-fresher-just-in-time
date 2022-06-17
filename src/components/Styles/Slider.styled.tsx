import Slider from "react-slick";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
& {
  background: transparent;
}

& .ant-carousel .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

& .ant-carousel {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum","tnum";
}

& .slick-slide img {
    display: block;
    height: 60px;
    width: auto;
    max-width: 180px;
    -o-object-fit: contain;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
}

& .ant-carousel .slick-list .slick-slide.slick-active {
    pointer-events: auto;
}

& .banner-item {
    height: 60px;
}

& .banner {
    background: transparent;
}
`;

export default StyledSlider;