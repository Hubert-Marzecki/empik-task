import style from "./ProductTile.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { preventDefault } from "../../utils.js";

export default function ProductTile(props) {
  return (
      <div className="slider-item">
        <div className="item-content">
          <img onDragStart={preventDefault} src={props.img} alt={props.name} />
          <div className="caption ">
            <p className="item-name font-weight-bold"> {props.name} </p>
            <p className="item-brand"> {props.brand} </p>
            <p className="item-price font-weight-bold"> {props.price} zł </p>
          </div>
        </div>
      </div>
  );
}
