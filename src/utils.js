import { useState, useEffect } from "react";


export function randomFromRange(minBound, maxBound) {
  let min = Math.ceil(minBound);
  let max = Math.floor(maxBound);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function genArray(length, itemGenerator) {
  return Array.from(Array(length).keys()).map(itemGenerator);
}


const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;