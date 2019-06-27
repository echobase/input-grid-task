import React, { useState, useEffect } from 'react';
import GridTotalDisplay from '../GridTotalDisplay/GridTotalDisplay';
import GridInputField from '../GridInputField/GridInputField';
import formatTo3Digits from '../../utils/FormatTo3Digits';
import isValidNumericalInput from '../../utils/ValidateNumericalInput';
import '../../styles/common.css';

const InputGridContainer = () => {
  const [inputFields, setInputFields] = useState({ 
    input1: 0,
    input2: 0,
    input3: 0,
    total: 0,
  });
  const [ error, setError ] = useState({ 
    input1: false,
    input2: false,
    input3: false,
  });

  useEffect(() => {
    setInputFields({
      ...inputFields,
      total: parseInt(inputFields.input1) + parseInt(inputFields.input2) + parseInt(inputFields.input3)
    });
  }, [inputFields.input1, inputFields.input2, inputFields.input3]);

  function handleInputFieldChange({ target: { name, value } }) {
    if(isValidNumericalInput(value)) {
      setError({
        ...error,
        [name]: false,
      });
      setInputFields({
        ...inputFields,
        [name]: value || 0,
      });

    } else {
      setInputFields({
        ...inputFields,
        [name]: 0,
      });
      setError({
        ...error,
        [name]: true,
      });
    }
  }

  return (
    <div className="gridContainer">
      <GridInputField 
        name="input1" 
        onChange={handleInputFieldChange} 
        error={error.input1}
      />
      <GridInputField 
        name="input2" 
        onChange={handleInputFieldChange} 
        error={error.input2}
      />
      <GridInputField 
        name="input3" 
        onChange={handleInputFieldChange}
        error={error.input3}
      />
      <GridTotalDisplay total={formatTo3Digits(inputFields.total)}  />
    </div>
  )
}

export default InputGridContainer;