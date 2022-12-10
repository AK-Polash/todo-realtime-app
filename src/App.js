import React from "react";
import InputArea from "./components/InputArea";
import TodosArea from "./components/TodosArea";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-flat">
        <InputArea />
        <TodosArea />
      </div>
    </>
  );
}

export default App;
