export function randomFromRange(minBound, maxBound) {
  let min = Math.ceil(minBound);
  let max = Math.floor(maxBound);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function genArray(length, itemGenerator) {
  return Array.from(Array(length).keys()).map(itemGenerator);
}
