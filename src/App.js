import React, { useState } from "react";
import InputArea from "./components/InputArea";
import TodosArea from "./components/TodosArea";

function App() {
  let [title, setTitle] = useState("");
  let [task, setTask] = useState("");

  let handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  let handleInputTask = (e) => {
    setTask(e.target.value);
  };

  let handleSubmit = () => {
    console.log(title);
    console.log(task);
  };

  return (
    <>
      <div className="w-full h-screen bg-flat">
        <InputArea
          handleInputTitle={handleInputTitle}
          handleInputTask={handleInputTask}
          handleSubmit={handleSubmit}
        />
        <TodosArea title={title} task={task} />
      </div>
    </>
  );
}

export default App;
