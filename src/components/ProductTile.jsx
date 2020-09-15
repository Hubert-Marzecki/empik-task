import style from './ProductTile.css'

import React from "react";

export default function ProductTile (props) {
    return (
        <>
        <div className="slider-item " onClick={(e) => console.log(`${props} clicked`)}>
          <div className="item-content">
            <img onDragStart={(e) => e.preventDefault()} src={props.img} alt={props.name} />
            <div className="caption ">
            <p className="item-name font-weight-bold"> {props.name} </p>
            <p className="item-brand"> BRAND </p>
            <p className="item-price font-weight-bold">  {props.price} zł </p>
            </div>
          </div>
        </div>
      </>
    )
}

