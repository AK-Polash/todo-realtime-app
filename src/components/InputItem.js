import React from "react";

const InputItem = ({ placeholder, className, onChange, inputRef }) => {
  return (
    <input
      onChange={onChange}
      className={className}
      type="text"
      placeholder={placeholder}
      ref={inputRef}
    />
  );
};

export default InputItem;
