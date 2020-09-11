import React, { useState } from "react";
import modalStyle from "./modalStyle.css";
import { genArray, randomFromRange } from "../utils.js";
import 'bootstrap/dist/css/bootstrap.css';

export default function Modal(props) {

  const [state, setState] = useState({
    allItems: 10,
    offset: 0,    
  })
  const LIMIT = 3
  const moveBy = 2

  const images = genArray(state.allItems, () => randomFromRange(0, 90))
    .map((item) => `https://picsum.photos/id/${item}/600/600`)
    .map((image, index) => 
    <>
    <div className="">
    <img className="p-1  img " src={image} alt="" />
    <p>{index}</p>
    </div>

    </>
    );

    function goToMoreInSlider() {
      if ( state.offset + moveBy >= images.length) {
        return (
          <div className="col-1 text-center"> GO TO MORE </div>
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

      <div className=" modal__holder container position-relative ">
        <div className="row d-flex  ">

      <a className="position-absolute slider__arrow arrow__prev " onClick={() =>  moveSlides("prev")} >XPREV</a>  

      <div className="col-11 imgs__holder  d-flex justify-content-center align-items-center ">
      {images.slice(state.offset, state.offset+LIMIT)}
      </div>
      {goToMoreInSlider()} 
      {(state.offset + moveBy >= images.length) ?  null :<a className="position-absolute slider__arrow arrow__next" onClick={() =>  moveSlides("next")} >XNEXT</a>  }
      </div>
 
    </div>

    </>
  );
}
