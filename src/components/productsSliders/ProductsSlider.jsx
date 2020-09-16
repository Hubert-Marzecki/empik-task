import React, { useState } from "react";
import ProductTile from "../productTile/ProductTile";
import { productsInfo } from "../../constants.js";
import { logErrorUnhandledCase } from "../../utils.js";
import sliderArrow from "../../assets/slider-arrow.png";
import "./sliderStyles.css";

export default function ProductsSliderCSS(props) {
  const [state, setState] = useState({
    isMouseDown: false,
    startX: 0,
    sliderOffset: 0,
  });
  const sliderDiv = React.useRef(null);

  function maxDivOffset() {
    return -sliderDiv.current.scrollWidth + sliderDiv.current.clientWidth;
  }

  function adjustSliderValue(state) {
    if (state.sliderOffset > 0) {
      return { ...state, sliderOffset: 0 };
    } else if (state.sliderOffset < maxDivOffset()) {
      return { ...state, sliderOffset: maxDivOffset() };
    } else {
      return state;
    }
  }

  function extractPageX(e) {
    if (e.touches) {
      return e.touches[0].pageX;
    } else {
      return e.pageX;
    }
  }

  // slider callbacks
  function onMouseDown(e) {
    e.persist();
    setState((s) => ({
      ...s,
      isMouseDown: true,
      startX: extractPageX(e),
    }));
  }

  function onMouseLeave(e) {
    e.persist();
    setState((s) => ({ ...adjustSliderValue(s), isMouseDown: false }));
  }

  function onMouseUp() {
    setState((s) => ({ ...adjustSliderValue(s), isMouseDown: false }));
  }

  function onMouseMove(e) {
    if (state.isMouseDown) {
      e.preventDefault();
      e.persist();
      const x = extractPageX(e);
      const move = Math.floor((x - state.startX) / 3);
      const scroll = state.sliderOffset + move;
      setState((s) => ({ ...s, sliderOffset: scroll }));
    }
  }

  function moveSlider(direction) {
    switch (direction) {
      case "next":
        if (state.sliderOffset >= maxDivOffset()) {
          setState((s) => ({ ...s, sliderOffset: s.sliderOffset - 200 }));
        }
        break;
      case "prev":
        if (state.sliderOffset < 0) {
          setState((s) => ({ ...s, sliderOffset: s.sliderOffset + 200 }));
        }
        break;
      default:
        logErrorUnhandledCase();
    }
  }

  return (
    <>
      <div className="position-relative w-100 row">
        <div className="slider-wrapper col-12 col-sm-8">
          <button
            className="position-absolute slider__arrow arrow__prev"
            onClick={() => moveSlider("prev")}
          >
            <img
              src={sliderArrow}
              className="arrow__img arrow__img--prev "
              alt="arrow-prev"
            />
          </button>
          <div
            className="slider-inner-content"
            ref={sliderDiv}
            style={{
              transitionDuration: "300ms",
              transform: `translate3d(${state.sliderOffset}px, 0px, 0px)`,
            }}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={onMouseDown}
            onTouchEnd={onMouseUp}
            onTouchMove={onMouseMove}
          >
            {productsInfo.map(ProductTile)}
            <div className="slider-item">
              <div className="item-content">
                <p className="slider-cta font-bolder ">
                  {" "}
                  <a href="/#">ZOBACZ WIĘCEJ</a>{" "}
                </p>
              </div>
            </div>
          </div>
          <button
            className="position-absolute slider__arrow arrow__next"
            onClick={() => moveSlider("next")}
          >
            <img
              src={sliderArrow}
              className="arrow__img arrow__img--next"
              alt="arrow-next"
            />
          </button>
        </div>
      </div>
    </>
  );
}
