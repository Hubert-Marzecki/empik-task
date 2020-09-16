import "./ProductTile.css";

import React from "react";
import { preventDefault } from "../../utils.js";

export default function ProductTile({name, img, brand, price}) {
  return (
      <div key={name} className="slider-item">
        <div className="item-content">
          <img onDragStart={preventDefault} src={img} alt={name} />
          <div className="caption ">
            <p className="item-name font-weight-bold"> {name} </p>
            <p className="item-brand"> {brand} </p>
            <p className="item-price font-weight-bold"> {price} zł </p>
          </div>
        </div>
      </div>
  );
}
