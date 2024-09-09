import React from 'react';

const Checkbox = () => {
  return (
    <div className="checkbox-container boxing">
      <input type="checkbox" className="form-check-input" id="Check1"></input>
      <label className="check-label" for="Check1">
        아이디 저장
      </label>
    </div>
  );
};

export default Checkbox;
