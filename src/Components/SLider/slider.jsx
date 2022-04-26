import { useState } from "react";
import SliderData from "./slide.json";
import "./slider.css";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  setInterval(
    () =>
      setTimeout(() => {
        setCurrent((pre) => (pre == length - 1 ? 0 : pre + 1));
      }, 1000),
    4000
  );

  return (
    <div className="container d-flex justify-content-center">
      <div className="slide w-100">
        <img src={SliderData[current]} alt="travel" className="imageCarousel" />
      </div>
    </div>
  );
};

export default Slider;
