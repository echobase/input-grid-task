import React from 'react';

const magnitudes = [
  { boundary: 1e9 , notation: 'B' },
  { boundary: 1e6 , notation: 'M' },
  { boundary: 1e3 , notation: 'k' }
];

function formatTo3Digit(num) {
  const TRIM_LENGTH_DECIMAL = 4;
  const TRIM_LENGTH_STANDARD = 3;
  for (let i = 0; i < magnitudes.length; i++) {
    if (num >= magnitudes[i].boundary) {
      let boundary = (num / magnitudes[i].boundary).toString();
      if(boundary.substring(0, 3).includes('.')) {
        return (num / magnitudes[i].boundary).toString().substring(0, TRIM_LENGTH_DECIMAL) + magnitudes[i].notation;
      } else {
        return (num / magnitudes[i].boundary).toString().substring(0, TRIM_LENGTH_STANDARD) + magnitudes[i].notation;
      }
    }
  }
  return num.toString();
}

export default formatTo3Digit;