import React, { useState } from 'react';
import modalStyle from './modalStyle.css'
export default function Modal (props) {

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    var myArray = Array.from(Array(3).keys());
    const arr = shuffle(myArray);

    return (
        <div 
        className="modal bg-red"
        onClick={() => props.close()}
        >
            {props.count}
            {arr.map(item => (
                <img className="" src={`https://picsum.photos/id/${item}/200/300`} />
            ))}

        </div>
    )
}
// TODO - same images every time - changing images = passing data in props (not effective) | call for images on click by id / name (better option ) REST