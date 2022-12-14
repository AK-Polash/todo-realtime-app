import React from "react";
import ButtonItem from "./ButtonItem";
import Buttons from "./Buttons";
import Heading from "./Heading";
import TodoPost from "./TodoPost";
import TodoPostItem from "./TodoPostItem";

const TodosArea = ({ title, task, handleDelete, handleEdit, handleShare }) => {
  return (
    <>
      <div className="w-[500px] mx-auto py-[10px] px-[20px] rounded-[10px] bg-gradient-to-r from-primary to-secondary">
        <div className="pt-[20px]">
          <Heading
            title={title}
            className="text-[32px] font-bold text-pure font-dm text-center"
          />
        </div>

        <TodoPost className="font-dm">
          <TodoPostItem
            className="text-pure py-[40px] text-center"
            post={task}
          />
        </TodoPost>

        <Buttons className="flex justify-center items-center gap-x-1 font-dm pb-[20px]">
          <ButtonItem
            title="Delete"
            className="w-[100px] py-[6px] text-dark bg-rapid rounded"
            onClick={handleDelete}
          />
          <ButtonItem
            title="Edit"
            className="w-[100px] py-[6px] text-dark bg-rapid rounded"
            onClick={handleEdit}
          />
          <ButtonItem
            title="Share"
            className="w-[100px] py-[6px] text-dark bg-rapid rounded"
            onClick={handleShare}
          />
        </Buttons>
      </div>
    </>
  );
};

export default TodosArea;
