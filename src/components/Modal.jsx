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
    {/* <div className="slider__item">
    <img className="p-1 img" src={image} alt="" />
    <p className="caption__name">{index}</p>
    <p className="caption__info">Lorem Ipsum</p> */}
    <div class="carousel-item col-6 col-sm-6 col-md-4 col-lg-3 active ">
                    <img src={image} class="img-fluid " alt="img1"/>
                </div>
    {/* </div> */}
    </>
    );

    console.log(images);
    function goToMoreInSlider() {
      if ( state.offset + moveBy >= images.length) {
        return (
          <div className=" carousel-item col-6 col-sm-6 col-md-4 col-lg-3 active"> GO TO MORE </div>
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
         <div className=" carousel slider__holder  d-flex justify-content-center align-items-center " data-ride="carousel">
         {goToMoreInSlider()}

            {images.slice(state.offset, state.offset+LIMIT)}

      </div>

      {(state.offset + moveBy >= images.length) ?  null : 
        <a className="position-absolute slider__arrow arrow__next" onClick={() =>  moveSlides("next")} >
         <img src={sliderArrow} className="arrow__img arrow__img--next"/>
        </a>  }
 
    </div>
    </div>

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

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
      <img src="https://picsum.photos/id/41/600/600" class="d-block  img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/12/600/600" class="d-block  img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/1/600/600" class="d-block  img-fluid" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </>
  );
}
