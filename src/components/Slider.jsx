import React from "react";
import Slider from "react-slick";

function SliderComponent({ settings, children }) {
  return <Slider {...settings}>{children}</Slider>;
}

export default SliderComponent;
