import React, { useState, useEffect } from "react";
import ProductsSlider from './components/ProductsSlider';
import ProductsSliderCSS from './components/ProductsSliderCSS';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { counties } from './constants.js'
import useMousePosition from './utils.js'


//  product item style - like empik 
//  go to more button
//  logo svg
//  napisać komentarze
//  public change name / logo
//  gh pages
//  estetic md
//  skrutowe if bez return
//  explorer

function App() {
  const [state, setState] = useState({
    selectedCount: "",
  })

  function displaySlider() {
    if (state.selectedCount) {
      return (
      <>
      <p className="text-center m-5 font-weight-bolder">Produkty dostępne w: {state.selectedCount}</p>
      <ProductsSlider count={state.selectedCount}/> 
      <ProductsSliderCSS count={state.selectedCount}/>
      </>
)
    } else {
      return <div className="m-4"></div>
    }
  }



  return (
    <>
        <h2 className="section__title m-5 text-center font-weight-bolder"> WYBIERZ WOJEWÓDZTWO </h2>
       <div className=" container ">
        
          <div className=" map-container w-100 md-w-25 ">
            <svg className="map"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="xMidYMid meet"
                  >
              {counties.map((item, index) => (
                <path
                  key={index}
                  d={item.svgPath}
                  className={`path path-${index} ${state.selectedCount === item.name ? "path--active" : null}`}
                  xlinkTitle="123213"
                  onClick={() => setState((s) => ({ ...s, selectedCount: item.name}))}
                />
              ))}
            </svg>
          </div>

          <div className="col slider__holder mb-5">
            {displaySlider()}
          </div>

      </div>


    </>

  );
}

export default App;
