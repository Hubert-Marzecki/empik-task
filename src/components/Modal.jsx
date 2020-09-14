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
    sliderOffset: 0,
  })

  const MOVE_BY = 300


  useEffect(() => {
    const updateMousePosition = ev => {
      setState((s) => ({...s, mouseX: ev.clientX, mouseY: ev.clientY }));
    };
    window.addEventListener("mousemove", updateMousePosition);
    console.log(`mouse X: ${state.mouseX}`);
    console.log(`mouse Y: ${state.mouseY}`)
    const element = elementPosition(sliderWrapper)

    if(element != 
    null && 
    state.mouseX > element.fromLeft && 
    state.mouseX < element.fromLeft + element.width &&
    state.mouseY > element.fromTop && 
    state.mouseY < element.fromTop + element.height
    ) {
      // scrollLeft(sliderWrapper, 100)
        console.log("I'm in");
    }
    return () => window.removeEventListener("mousemove", updateMousePosition);
  },[state.mouseX])

  function scrollLeft (el, px, e){
    if(el === null) {
       return
    } else {
      e.preventDefault();
      if(state.sliderOffset + MOVE_BY > elementPosition.width) {
        return
      } else {
        el.scrollLeft = px
        setState((s) => ({...s, sliderOffset: px}));
      }
    
    }
    
  }

  const images = genArray(state.allItems, () => randomFromRange(0, 90))
    .map((item,index) => `https://picsum.photos/id/${index}/240/240`)
    .map((image, index) => 
    <>
     <div className="box " key={index}>
      <div className="box-content">
      <img src={image}  alt="img1"/>
      </div>
    </div>
    </>
    );

      const sliderWrapper = document.querySelector(".landing-wrapper");
// console.log(sliderWrapper != null ? sliderWrapper : null);
     const  elementPosition  =  (elem) => {
        if(elem === null) {
          return null
        } else {
          return {  
            fromLeft: elem.parentElement.offsetLeft ,
            fromTop: elem.clientHeight + elem.offsetHeight ,
            width: elem.offsetWidth,
            height: elem.offsetHeight,
          }
        }
      }
      // console.log(sliderWrapper === null ? "dupa" : sliderWrapper);
    


      const slider = document.querySelector('.landing-inner-contant');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 3; //scroll-fast
          slider.scrollLeft = scrollLeft - walk;
          console.log(walk);
        });

        
  return (
    <>
  
<p>Produkty dostępne w: {props.count}</p>
<div className="position-relative w-100">

        <a className="position-absolute slider__arrow arrow__prev">
          <img src={sliderArrow} className="arrow__img arrow__img--prev " onClick={(e) => scrollLeft(sliderWrapper, state.sliderOffset + MOVE_BY,e)}/>
        </a> 

  <div class="landing-wrapper" >
  <div class="landing-inner-content" data-track='hover'>
  {images}
        {/* <a className="position-absolute slider__arrow arrow__next"  >
         <img src={sliderArrow} className="arrow__img arrow__img--next"/>
        </a>   */}
    <div class="box ">
      <div class="box-content">
      </div>
        <p> GO TO MORE </p>
      </div>
    </div>
        </div>
 </div>
    </>
  );
}
