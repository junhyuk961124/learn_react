import React from 'react';

const Email = () => {
  return (
    <div className="email-container boxing">
      <label for="email" className="email-label"></label>
      <input
        type="email"
        className="email-control inputbox "
        id="InputEmail"
        placeholder="이메일"
      ></input>
    </div>
  );
};

export default Email;
