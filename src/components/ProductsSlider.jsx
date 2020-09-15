import React, {  nm useState } from "react";
import sliderStyles from "./sliderStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import sliderArrow from "../assets/next.png";
import { productsInfo } from "../constants.js";
import ProductTile from "./ProductTile";

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
      <code>Wersja JS</code>

      <div className="position-relative w-100 ">
        <a
          className="position-absolute slider__arrow arrow__prev"
          onClick={() => (sliderDiv.current.scrollLeft -= 200)}
        >
          <img src={sliderArrow} className="arrow__img arrow__img--prev " />
        </a>

        <div className="landing-wrapper rounded" ref={sliderDiv}>
          <div
            className="landing-inner-content"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {productsInfo.map(ProductTile)}

            <div className="item ">
              <div className="item-content"></div>
              <p> GO TO MORE </p>
            </div>
          </div>
        </div>
        <a
          className="position-absolute slider__arrow arrow__next"
          onClick={() => (sliderDiv.current.scrollLeft += 200)}
        >
          <img src={sliderArrow} className="arrow__img arrow__img--next" />
        </a>
      </div>
    </>
  );
}
