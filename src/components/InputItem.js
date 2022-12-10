import React from "react";

const InputItem = ({ placeholder, className, onChange }) => {
  return (
    <input
      onChange={onChange}
      className={className}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default InputItem;
