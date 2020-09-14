import React, { useState } from "react";
import modalStyle from "./modalStyle.css";
import { genArray, randomFromRange } from "../utils.js";
import "bootstrap/dist/css/bootstrap.css";
// import resetCss from '../resetCss.css'
import sliderArrow from "../assets/next.png";
import useMousePosition from "../utils.js";

export default function Modal(props) {
  const [state, setState] = useState({
    allItems: 10,
    offset: 0,
    isMouseDown: false,
    startX: 0,
    scrollLeft: 0,
  });

   const sliderDiv = React.useRef(null);
   const images = genArray(state.allItems, () => randomFromRange(0, 90))
    .map((item, index) => `https://picsum.photos/id/${index}/240/240` )
    .map((image, index) => (
      <>
        <div className="box " key={index}>
          <div className="box-content">
            <img src={image} alt="img1" />
          </div>
        </div>
      </>
    ));
  // const slider = document.querySelector(".landing-inner-contant");
  // let isDown = false;
  // let startX;
  // let scrollLeft;

  // slider.addEventListener('mousedown', (e) => {
  //   isDown = true;
  //   // slider.classList.add('active');
  //   startX = e.pageX - slider.offsetLeft;
  //   scrollLeft = slider.scrollLeft;
  // });
  // slider.addEventListener('mouseleave', () => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener("mouseup", () => {
  //   isDown = false;
  //   slider.classList.remove("active");
  // });
  // slider.addEventListener("mousemove", (e) => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - slider.offsetLeft;
  //   const walk = (x - startX) * 3; //scroll-fast
  //   slider.scrollLeft = scrollLeft - walk;
  //   console.log(walk);
  // });

  function onMouseDown(e) {
    e.persist()
    setState((s) => ({
      ...s,
      isMouseDown: true,
      startX: e.pageX - sliderDiv.current.offsetLeft,
    }));
  }

  function onMouseLeave(e) {
    e.persist()
    setState((s) => ({ ...s, isMouseDown: false }));
    console.log(state);

  }
  function onMouseUp(e) {
      e.persist()
    setState((s) => ({ ...s, isMouseDown: false }));
  }
  function onMouseMove(e) {
    if (!state.isMouseDown) {
      return;
    } else {
      // e.persist()
      e.preventDefault();
      const x = e.pageX - sliderDiv.current.offsetLeft;
      const walk = (x - state.startX) / 20;
      console.log(`walk: ${walk}`);
      // setState((s) => ({...s, sliderDiv.current.scrollLeft: state.scrollLeft - walk}));
      const scrollLeft = state.scrollLeft - walk;
      // console.log(state.scrollLeft - walk);
      // console.log(`elem scrollLeft : ${sliderDiv.current.scrollLeft}`);
      setState((s) => {
        sliderDiv.current.scrollLeft = scrollLeft;
      console.log(scrollLeft);
      console.log(`elem scrollLeft : ${sliderDiv.current.scrollLeft}`);
        return {
          ...s,
          scrollLeft : scrollLeft
        };
      })
    }
  }

  return (
    <>
      <p>Produkty dostępne w: {props.count}</p>
      <div className="position-relative w-100">
        <a className="position-absolute slider__arrow arrow__prev">
          <img src={sliderArrow} className="arrow__img arrow__img--prev " />
        </a>

        <div className="landing-wrapper">
          <div
            className="landing-inner-content"
            ref={sliderDiv}
            onMouseDown={(e) => onMouseDown(e)}
            onMouseLeave={(e) =>onMouseLeave(e)}
            onMouseUp={(e) =>onMouseUp(e)}
            onMouseMove={(e) =>onMouseMove(e)}
            // scrollLeft={state.scrollLeft}
          >
            {images}
            {/* <a className="position-absolute slider__arrow arrow__next"  >
                  <img src={sliderArrow} className="arrow__img arrow__img--next"/>
                </a>   */}
            <div className="box ">
              <div className="box-content"></div>
              <p> GO TO MORE </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
