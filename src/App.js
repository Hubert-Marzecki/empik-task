import React, { useState, useEffect } from "react";
import Modal from './components/Modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { mapElements } from './constants.js'
import useMousePosition from './utils.js'
// czy MODAL ???


function App() {
  const [state, setState] = useState({
    countSelected: "",
  })
  // odwrotnie selectedCounts

  function closeModal() {
    // setState((s) => ({ ...s, countSelected: "" }))
  }

  function displayModal() {
    if (state.countSelected) {
      return (< Modal count={state.countSelected} onClose={closeModal} />)
    } else {
      return <div className="m-4"></div>
    }
  }



  return (
    <>
        <h2 className="section__title m-5 text-center font-weight-bolder"> WYBIERZ WOJEWÓDZTWO </h2>

       <div className=" container ">
        
          <div className=" map-container w-25">
            <svg className="map"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="xMidYMid meet"
                  >
              {mapElements.map((item, index) => (
                <path
                  key={index}
                  d={item.d}
                  className={`path path-${index} ${state.countSelected === item.count ? "path--active" : null}`}
                  xlinkTitle="123213"
                  onClick={() => setState((s) => ({ ...s, countSelected: item.count }))}
                />
              ))}
            </svg>
          </div>

          <div className="col slider__holder">
            {displayModal()}
          </div>

      </div>


    </>

  );
}

export default App;
