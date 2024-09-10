import React from 'react';
import CardButton from './CardButton';

const Card = ({ title, subText, onCardButton }) => {
  // logic
  // const subText = "카드 서브 텍스틍비니다"
  const handleclick = () => {
    onCardButton();
  };

  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <p className="card-sub-text">{subText}</p>
      <CardButton onCardButton={handleclick} />
    </div>
  );
};

export default Card;
