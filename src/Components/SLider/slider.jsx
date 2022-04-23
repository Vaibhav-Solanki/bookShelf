import React from "react";
import { useState } from "react";
import SliderData from "./slide.json";
import "./slider.css";
import styled, { keyframes } from "styled-components";
import { fadeOut } from "react-animations";

const animations = keyframes`${fadeOut}`;

const AnimatedDiv = styled.div`
  animation: 4s ${animations};
`;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  setInterval(nextSlide, 4000);
  return (
    <div className="slider">
      {SliderData.map((slide, index) => {
        return (
          <AnimatedDiv
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <img src={slide.image} alt="travel" className="imageCarousel" />
              </>
            )}
          </AnimatedDiv>
        );
      })}
    </div>
  );
};

export default Slider;
