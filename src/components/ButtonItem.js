import React from "react";

const ButtonItem = ({ title, className, type, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={className} type={type}>
        {title}
      </button>
    </>
  );
};

export default ButtonItem;
