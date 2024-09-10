import React from 'react';

const ButtonField = ({ buttonName, className, onButtonClick }) => {
  const buttonclick = () => {
    onButtonClick();
  };
  return (
    <button type="button" className={className} onClick={buttonclick}>
      {buttonName}
    </button>
  );
};

export default ButtonField;
