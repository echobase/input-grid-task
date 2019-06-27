import React from 'react';

const GridTotalDisplay = (props) => {
  return (
    <div className="fieldContainer displayContainer">
      <div className="fieldContainerInnerWrapper">
        <label>Total:</label>
        <span className="display">{props.total}</span>
      </div>
    </div>
  )
}

export default GridTotalDisplay;