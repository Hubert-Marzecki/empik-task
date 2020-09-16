import React, { useState } from "react";
// import AltProductsSlider from "./components/productsSliders/AltProductsSlider.jsx"
import ProductsSlider from "./components/productsSliders/ProductsSlider.jsx";
import { counties } from "./constants.js";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, setState] = useState({
    selectedCount: "",
  });

  function displaySlider() {
    if (state.selectedCount) {
      return (
        <>
          <p className="text-center m-5 font-weight-bolder">
            Produkty dostępne w: {state.selectedCount}
          </p>
          {/* An unfinished alternative slider implementation, more reliant on JS */}
          {/* <AltProductsSlider count={state.selectedCount}/>  */}
          <ProductsSlider count={state.selectedCount} />
        </>
      );
    }
  }

  const setCounty = (county) => {
    return () => setState((s) => ({ ...s, selectedCount: county }));
  };

  const countyPathStyle = (county) => {
    let selectedClass = state.selectedCount === county ? "path--active" : "";
    return `path btn ${selectedClass}`;
  };

  return (
    <>
      <h2 className="section__title m-5 text-center font-weight-bolder">
        WYBIERZ WOJEWÓDZTWO
      </h2>

      <div className="container">
        <div className="d-block col col-md-5 col-lg-3 mx-auto my-0 mx-auto my-0">
          <svg
            className="d-block w-100"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {counties.map((item, index) => (
              <path
                key={index}
                d={item.svgPath}
                className={countyPathStyle(item.name)}
                onClick={setCounty(item.name)}
              />
            ))}
          </svg>
        </div>
        <div className="col mb-5">{displaySlider()}</div>
      </div>
    </>
  );
}

export default App;
