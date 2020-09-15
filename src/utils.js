import { useState, useEffect } from "react";


export const preventDefault = (e) => e.preventDefault()

// FROM SLIDER 
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