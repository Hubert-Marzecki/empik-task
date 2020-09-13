import React, { useState, useEffect } from "react";
import modalStyle from "./modalStyle.css";
import { genArray, randomFromRange } from "../utils.js";
import 'bootstrap/dist/css/bootstrap.css';
// import resetCss from '../resetCss.css'
import sliderArrow from '../assets/next.png';
import useMousePosition from '../utils.js'



export default function Modal(props) {

  const [state, setState] = useState({
    allItems: 10,
    offset: 0,    
    mouseX: null,
    mouseY: null,
    containerDimension: {
      
    }
  })
  const LIMIT = 8
  const moveBy = 2

  const images = genArray(state.allItems, () => randomFromRange(0, 90))
    .map((item,index) => `https://picsum.photos/id/${index}/240/240`)
    .map((image, index) => 
    <>
     <div class="box ">
      <div class="box-content">
      <img src={image}  alt="img1"/>
      </div>
    </div>
    </>
    );

  const { x, y } = useMousePosition();
   
    // function goToMoreInSlider() {
    //   if ( state.offset + moveBy >= images.length) {
    //     return (
    //       <div className=" col-6 col-sm-6 col-md-4 col-lg-3 active"> GO TO MORE </div>
    //     )
    //   }
    // }

    // function moveSlides(direction) {
    //     switch (direction) {
    //       case "next":
    //         if (state.offset + moveBy < images.length) {
    //           setState((s) => ({ ...s, offset: s.offset + moveBy }))
    //         } else {
    //           setState((s) => ({ ...s, offset: 0 }))
    //         }
    //         break;
        
    //         case "prev":
    //           const newOffset = state.offset - moveBy
    //           if(newOffset >= 0) {
    //             setState((s) => ({ ...s, offset: s.offset - moveBy }))
    //           } else {
    //             return
    //           }
    //     }  
    // }

 

  return (
    <>
        {/* <h3 className="text-center">{props.count}</h3>

        <div className="position-relative">

      <div className=" modal__holder  bg-secondary d-flex justify-content-center align-items-center">
        {(state.offset === 0 ) ?  null : 
        <a className="position-absolute slider__arrow arrow__prev">
          <img src={sliderArrow} className="arrow__img arrow__img--prev "/>
        </a>  
      }
         <div className=" carousel slider__holder  d-flex justify-content-center align-items-center " data-ride="carousel">
            {images.slice(state.offset, state.offset+LIMIT)}
            {goToMoreInSlider()}
      </div>

      {(state.offset + moveBy >= images.length) ?  null : 
        <a className="position-absolute slider__arrow arrow__next"  >
         <img src={sliderArrow} className="arrow__img arrow__img--next"/>
        </a>  }
 
    </div>
    </div> */}

{/* 
    <div class="top-content">
    <div class="container-fluid">
        <div id="carousel-example" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner row w-100 mx-auto" role="listbox">
            {images.slice(state.offset, state.offset+LIMIT)}
            </div>
            <a class="carousel-control-prev bg-primary" href="#carousel-example" role="button" data-slide="prev" onClick={() =>  moveSlides("prev")}>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next bg-primary" href="#carousel-example" role="button" data-slide="next" onClick={() =>  moveSlides("next")}>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </div>
</div> */}
<p>Produkty dostępne w: </p>

<div class="landing-wrapper" >
  <div class="landing-inner-content">

  {images}

    <div class="box box-10">
      <div class="box-content">
        <p>GO TO MORE</p>
      </div>
    </div>

  </div>
</div>


    </>
  );
}
