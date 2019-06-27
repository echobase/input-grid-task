import React from 'react';

const GridInputField = (props) => {
  return (
    <div className="fieldContainer">
      <div className="fieldContainerInnerWrapper">
        <label htmlFor="inputField">Input a number here:</label>
        <input
          name={props.name}
          placeholder="0"
          type="text"
          maxLength="11"
          onChange={props.onChange}
        >
        </input>
        {props.error && (
          <span className="error">Input must be a number</span>
        )}
      </div>
    </div>
  )
}
export default GridInputField;