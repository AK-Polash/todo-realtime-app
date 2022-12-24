import React from "react";
import ButtonItem from "./ButtonItem";
import InputItem from "./InputItem";

const InputArea = ({
  handleInputTitle,
  handleInputTask,
  handleSubmit,
  handleUpdate,
  show,
  titleInputRef,
  taskInputRef,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-[8px] py-[15px] ">
        <InputItem
          className="font-dm w-[360px] h-[54px] rounded-[50px] px-[40px] py-[10px] text-center transition-all duration-100 ease-linear border-2 border-rare focus-visible:outline-0 focus-visible:border-secondary focus-visible:w-[450px] "
          placeholder="enter todo title"
          onChange={handleInputTitle}
          inputRef={titleInputRef}
        />
        <InputItem
          className="font-dm w-[360px] h-[54px] rounded-[50px] px-[40px] py-[10px] text-center transition-all duration-100 ease-linear border-2 border-rare focus-visible:outline-0 focus-visible:border-secondary focus-visible:w-[450px] "
          placeholder="enter your task"
          onChange={handleInputTask}
          inputRef={taskInputRef}
        />

        {show ? (
          <ButtonItem
            title="Update"
            className="bg-primary w-[200px] h-[48px] text-pure font-semibold text-center font-dm rounded-[50px] border-2 border-transparent transition-all ease-linear duration-200 hover:border-2 hover:border-secondary hover:text-secondary hover:bg-pure "
            type="submit"
            onClick={handleUpdate}
          />
        ) : (
          <ButtonItem
            title="Add Todo"
            className="bg-primary w-[200px] h-[48px] text-pure font-semibold text-center font-dm rounded-[50px] border-2 border-transparent transition-all ease-linear duration-200 hover:border-2 hover:border-secondary hover:text-secondary hover:bg-pure "
            type="submit"
            onClick={handleSubmit}
          />
        )}
      </div>
    </>
  );
};

export default InputArea;
