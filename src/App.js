import React, { useEffect, useState } from "react";
import InputArea from "./components/InputArea";
import TodosArea from "./components/TodosArea";
import { getDatabase, push, ref, set, onValue } from "firebase/database";

function App() {
  let [title, setTitle] = useState("");
  let [task, setTask] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [todo, setTodo] = useState([]);
  let db = getDatabase();

  let handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  let handleInputTask = (e) => {
    setTask(e.target.value);
  };

  let handleSubmit = () => {
    if (!title) {
      setErrorMsg("Enter todo Title");
    } else if (!task) {
      setErrorMsg("Enter todo Task");
    } else {
      set(push(ref(db, "Todos")), {
        todoTitle: title,
        todoTask: task,
      })
        .then(() => {
          console.log("kaj hoise");
        })
        .catch((error) => {
          console.log("Error: ", error);
        });

      setErrorMsg("");
    }
  };

  // Read data from databse:
  useEffect(() => {
    const todoRef = ref(db, "Todos");
    onValue(todoRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setTodo(arr);
    });
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-flat">
        <InputArea
          handleInputTitle={handleInputTitle}
          handleInputTask={handleInputTask}
          handleSubmit={handleSubmit}
        />

        <div className="text-center text-red-500 font-dm font-bold text-2xl py-4">
          {errorMsg}
        </div>

        <div className="flex flex-col items-center gap-y-[30px]">
          {todo.map((item, index) => (
            <TodosArea
              key={index}
              title={item.todoTitle}
              task={item.todoTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
