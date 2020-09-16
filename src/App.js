import React, { useState, useEffect } from "react";
import ProductsSlider from './components/productsSliders/ProductsSlider.jsx'
import ProductsSliderCSS from './components/productsSliders/ProductsSliderCSS.jsx'
import './App.css';
import { counties } from './constants.js'
import useMousePosition from './utils.js'
import 'bootstrap/dist/css/bootstrap.min.css';

//  napisać komentarze

function App() {
  const [state, setState] = useState({
    selectedCount: "",
  })

  function displaySlider() {
    if (state.selectedCount) {
      return (
      <>
      <p className="text-center m-5 font-weight-bolder">Produkty dostępne w: {state.selectedCount}</p>
      {/* <ProductsSlider count={state.selectedCount}/>  */}
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

       <div className="container">
          <div className=" map-container d-block col-12 col-md-5 col-lg-3 mx-auto my-0 mx-auto my-0">
            <svg className="map d-block w-100"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="xMidYMid meet"
                  >
              {counties.map((item, index) => (
                <path
                  key={index}
                  d={item.svgPath}
                  className={`path btn ${state.selectedCount === item.name  ? "path--active" : null}`}
                  // xlinkTitle=""
                  onClick={() => setState((s) => ({ ...s, selectedCount: item.name}))}
                />
              ))}
            </svg>
          </div>
          <div className="col mb-5">
            {displaySlider()}
          </div>
      </div>
    </>
  );
}

export default App;
