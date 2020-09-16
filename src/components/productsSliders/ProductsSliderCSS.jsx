import React, { useState } from "react";
import sliderArrow from '../../assets/slider-arrow.png'
import ProductTile from '../productTile/ProductTile'
import { productsInfo } from "../../constants.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductsSliderCSS(props) {
  const [state, setState] = useState({
    allItems: 8,
    isMouseDown: false,
    startX: 0,
    sliderOffset: 0,
    transitionDuration: "300ms"
  });
  const sliderDiv = React.useRef(null);

  function onMouseDown(e) {
    e.persist();
    // console.error("START");
    // console.error(e.pageX);
    // console.error(state.sliderOffset);
    // console.error(e.pageX + state.sliderOffset);
    setState((s) => ({
      ...s,
      isMouseDown: true,
      startX: extractPageX(e),
    }));
  }

  function maxDivOffset() {
    return -sliderDiv.current.scrollWidth + sliderDiv.current.clientWidth;
  }

  function adjustSliderValue(state) {
    // console.error(sliderDiv.current.scrollWidth);
    // console.error(state);
    if (state.sliderOffset > 0) {
      return { ...state, sliderOffset: 0 };
    } else if (state.sliderOffset < maxDivOffset()) {
      // console.log( -(state.allItems * 200))
      return { ...state, sliderOffset: maxDivOffset() };
    } else {
      return state;
    }
  }

  function onMouseLeave(e) {
    e.persist();
    setState((s) => ({ ...adjustSliderValue(s), transitionDuration: "300ms", isMouseDown: false }));
  }
  function onMouseUp() {
    setState((s) => ({ ...adjustSliderValue(s),  transitionDuration: "300ms", isMouseDown: false }));
  }

  function extractPageX(e) {
    if (e.touches) {
      return e.touches[0].pageX;
    } else {
      return e.pageX;
    }
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
    }
  }

  return (
    <>
      <div className="position-relative w-100 row">
        <div className="slider-wrapper col-12 col-sm-8">
          <a
            className="position-absolute slider__arrow arrow__prev"
            onClick={() => moveSlider("prev")}
          >
            <img src={sliderArrow} className="arrow__img arrow__img--prev " />
          </a>

          <div
            className="slider-inner-content"
            ref={sliderDiv}
            style={{
              transitionDuration: "300ms",
              transform: `translate3d(${state.sliderOffset}px, 0px, 0px)`,
            }}
            onMouseDown={(e) => onMouseDown(e)}
            onMouseLeave={(e) => onMouseLeave(e)}
            onMouseUp={(e) => onMouseUp(e)}
            onMouseMove={(e) => onMouseMove(e)}
            onTouchStart={(e) => onMouseDown(e)}
            onTouchEnd={(e) => onMouseUp(e)}
            onTouchMove={(e) => onMouseMove(e)}
          >
            {productsInfo.map(ProductTile)}
            <div className="slider-item">
              <div className="item-content">
                <p className="slider-cta font-bolder " href="#"> <a href="# "> GO TO MORE</a> </p>
              </div>
            </div>
          </div>
          <a
            className="position-absolute slider__arrow arrow__next"
            onClick={() => moveSlider("next")}
          >
            <img src={sliderArrow} className="arrow__img arrow__img--next" />
          </a>
        </div>
      </div>
    </>
  );
}
