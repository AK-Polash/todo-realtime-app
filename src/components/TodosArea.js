import React from "react";
import ButtonItem from "./ButtonItem";
import Buttons from "./Buttons";
import Heading from "./Heading";
import TodoPost from "./TodoPost";
import TodoPostItem from "./TodoPostItem";

const TodosArea = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-x-[30px]">
        <div className="w-[500px] mx-auto py-[10px] px-[20px] rounded-[10px] bg-gradient-to-r from-primary to-secondary">
          <div className="pt-[20px]">
            <Heading
              title="Heading"
              className="text-[32px] font-bold text-pure font-dm text-center"
            />
          </div>

          <TodoPost className="font-dm">
            <TodoPostItem
              className="text-pure py-[40px] text-center"
              post="hey there"
            />
          </TodoPost>

          <Buttons className="flex justify-center items-center gap-x-1 font-dm pb-[20px]">
            <ButtonItem
              title="Delete"
              className="w-[100px] py-[6px] text-dark bg-rapid rounded"
            />
            <ButtonItem
              title="Edit"
              className="w-[100px] py-[6px] text-dark bg-rapid rounded"
            />
            <ButtonItem
              title="Share"
              className="w-[100px] py-[6px] text-dark bg-rapid rounded"
            />
          </Buttons>
        </div>
      </div>
    </>
  );
};

export default TodosArea;
