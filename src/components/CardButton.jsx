import React from 'react';

const CardButton = ({ onCardButton }) => {
  // logic
  const handleclick = () => {
    onCardButton();
  };

  return (
    <button type="button" className="card-button" onClick={handleclick}>
      제안하기
    </button>
  );
};

export default CardButton;
