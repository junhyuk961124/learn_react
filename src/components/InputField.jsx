import React from 'react';

const InputField = ({
  type,
  className,
  id,
  placeholder,
  label,
  labelClass,
}) => {
  return (
    <div className="email-container boxing">
      <label for={label} className={labelClass}></label>
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default InputField;
