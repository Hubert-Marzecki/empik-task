import React, { useState, useEffect } from "react";
import modalStyle from "./modalStyle.css";
import { genArray, randomFromRange } from "../utils.js";
import 'bootstrap/dist/css/bootstrap.css';
// import resetCss from '../resetCss.css'
import sliderArrow from '../assets/next.png';
export default function Modal(props) {

  const [state, setState] = useState({
    allItems: 10,
    offset: 0,    
  })
  const LIMIT = 3
  const moveBy = 2

  useEffect(() => {
    console.log(state);
  },[state.offset])


  const images = genArray(state.allItems, () => randomFromRange(0, 90))
    .map((item,index) => `https://picsum.photos/id/${index}/600/600`)
    .map((image, index) => 
    <>
    <div className="slider__item">
    <img className="p-1 img" src={image} alt="" />
    <p className="caption__name">{index}</p>
    <p className="caption__info">Lorem Ipsum</p>
    </div>
    </>
    );

    console.log(images);
    function goToMoreInSlider() {
      if ( state.offset + moveBy >= images.length) {
        return (
          <div className="text-center slider__cta"> GO TO MORE </div>
        )
      }
    }

    function moveSlides(direction) {
        switch (direction) {
          case "next":
            if (state.offset + moveBy < images.length) {
              setState((s) => ({ ...s, offset: s.offset + moveBy }))
            } else {
              setState((s) => ({ ...s, offset: 0 }))
            }
            break;
        
            case "prev":
              const newOffset = state.offset - moveBy
              if(newOffset >= 0) {
                setState((s) => ({ ...s, offset: s.offset - moveBy }))
              } else {
                return
              }
        }  
    }

  return (
    <>
        <h3 className="text-center">{props.count}</h3>

        <div className="position-relative">

      <div className=" modal__holder  bg-secondary d-flex justify-content-center align-items-center">
        {(state.offset === 0 ) ?  null : 
        <a className="position-absolute slider__arrow arrow__prev " onClick={() =>  moveSlides("prev")}>
          <img src={sliderArrow} className="arrow__img arrow__img--prev "/>
        </a>  
      }
         <div className="col-12 slider__holder  d-flex justify-content-center align-items-center ">

            {images.slice(state.offset, state.offset+LIMIT)}
             {goToMoreInSlider()}

      </div>

      {(state.offset + moveBy >= images.length) ?  null : 
        <a className="position-absolute slider__arrow arrow__next" onClick={() =>  moveSlides("next")} >
         <img src={sliderArrow} className="arrow__img arrow__img--next"/>
        </a>  }
 
    </div>
    </div>

    </>
  );
}
