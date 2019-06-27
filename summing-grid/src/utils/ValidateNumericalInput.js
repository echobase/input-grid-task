import React from 'react';

export default function isValidNumericalInput(input) {
  // disallow numerical constant as well
  return (!isNaN(input) && !input.includes('e'));
}