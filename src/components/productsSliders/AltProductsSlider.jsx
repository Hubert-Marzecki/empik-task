import React, { useState } from "react";
import { productsInfo } from "../../constants.js";
import ProductTile from '../productTile/ProductTile'
import  '../productTile/ProductTile';
import sliderArrow from '../../assets/slider-arrow.png'


/* An unfinished alternative slider implementation, more reliant on JS  */
export default function ProductsSlider(props) {
  const [state, setState] = useState({
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
        <button
          className="slider__arrow arrow__prev position-absolute "
          onClick={() => (sliderDiv.current.scrollLeft -= 200)}
        >
          <img src={sliderArrow} className="arrow__img arrow__img--prev " alt="arrow-prev" />
        </button>

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
              <p className="slider-cta"> <a href="/#" > ZOBACZ WIĘCEJ </a> </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="slider__arrow  arrow__next border-0 position-absolute "
          onClick={() => (sliderDiv.current.scrollLeft += 200)}
          href="#"
        >
          <img src={sliderArrow} className="arrow__img arrow__img--next" alt="arrow-next"/>
          
        </button>
      </div>
    </>
  );
}
