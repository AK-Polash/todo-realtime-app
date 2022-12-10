import React from "react";

const TodoPostItem = ({ post, className }) => {
  return (
    <>
      <p className={className}> {post} </p>
    </>
  );
};

export default TodoPostItem;
