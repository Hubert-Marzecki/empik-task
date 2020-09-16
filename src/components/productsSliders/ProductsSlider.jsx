import React, { useState } from "react";
import sliderStyles from "./sliderStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import sliderArrow from '../../assets/slider-arrow.png'
import { productsInfo } from "../../constants.js";
import ProductTile from '../productTile/ProductTile'
import tileStyle from '../productTile/ProductTile';

export default function ProductsSlider(props) {
  const [state, setState] = useState({
    allItems: 10,
    offset: 0,
    isMouseDown: false,
    startX: 0,
    sliderOffset: 0,
  });
  const sliderDiv = React.useRef(null);

  function onMouseDown(e) {
    e.persist();
    setState((s) => ({
      ...s,
      isMouseDown: true,
      startX: e.pageX - sliderDiv.current.offsetLeft,
    }));
  }
  function onMouseLeave(e) {
    e.persist();
    setState((s) => ({ ...s, isMouseDown: false }));
  }
  function onMouseUp() {
    setState((s) => ({ ...s, isMouseDown: false }));
  }
  function onMouseMove(e) {
    if (state.isMouseDown) {
      e.preventDefault();
      const x = e.pageX - sliderDiv.current.offsetLeft;
      const walk = (x - state.startX) / 6;
      const scrollLeft = sliderDiv.current.scrollLeft - walk;
      sliderDiv.current.scrollLeft = scrollLeft;
      setState((s) => {
        return {
          ...s,
          scrollLeft: scrollLeft,
        };
      });
    }
  }

  return (
    <>
      <div className="position-relative  ">
        <a
          className="slider__arrow arrow__prev position-absolute "
          onClick={() => (sliderDiv.current.scrollLeft -= 200)}
        >
          <img src={sliderArrow} className="arrow__img arrow__img--prev " />
        </a>

        <div className="slider-wrapper rounded w-100" ref={sliderDiv}>
          <div
            className="slider-inner-content"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {productsInfo.map(ProductTile)}

            <div className="slider-item  mt-5 ">
              <div className="item-content">
              <p className="slider-cta" href="#"> <a href="#"> GO TO MORE</a> </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="slider__arrow  arrow__next border-0 position-absolute "
          onClick={() => (sliderDiv.current.scrollLeft += 200)}
        >
          <img src={sliderArrow} className="arrow__img arrow__img--next" />
        </a>
      </div>
    </>
  );
}
