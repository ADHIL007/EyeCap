import React, { useState } from "react";
import slides from "./slides";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


function Slide({ slide }) {
  return (
    <div className="slider">
      <img src={slide.image} alt="slider-image" />
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        <p className="slide-des">{slide.des}</p>
      </div>
    </div>
  );
}


function Carousal() {
  const [currIndex, setIndex] = useState(0);

  function gotoleft() {
    const isFIrst = currIndex === 0;
    const newIndex = isFIrst ? slides.length - 1 : currIndex - 1;
    setIndex(newIndex);
  }

  function gotoright() {
    const isLast = currIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currIndex + 1;
    setIndex(newIndex);
  }

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <div
            className="slides"
            style={{ transform: `translateX(-${currIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <Slide key={index} slide={slide} />
            ))}
          </div>
          <div>
            <div className="left-btn" onClick={gotoleft}>
              <ChevronLeftIcon fontSize="large" />
            </div>
            <div className="right-btn" onClick={gotoright}>
              <ChevronRightIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousal;

