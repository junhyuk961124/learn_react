import React from 'react';

const Password = () => {
  return (
    <div className="password-container boxing">
      <label for="Password" className="password-label"></label>
      <input
        type="password"
        className="password-control inputbox"
        id="Password"
        placeholder="비밀번호"
      ></input>
    </div>
  );
};

export default Password;
