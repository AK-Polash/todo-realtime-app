import React, { useEffect, useState } from "react";
import InputArea from "./components/InputArea";
import TodosArea from "./components/TodosArea";
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  remove,
} from "firebase/database";

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
        arr.push({ ...item.val(), id: item.key });
      });
      setTodo(arr);
    });
  }, []);

  // Handle buttons:
  let handleDelete = (id) => {
    remove(ref(db, "Todos/" + id));
  };

  let handleEdit = (id) => {
    console.log(id);
  };

  let handleShare = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="w-full bg-flat">
        <InputArea
          handleInputTitle={handleInputTitle}
          handleInputTask={handleInputTask}
          handleSubmit={handleSubmit}
        />

        <div className="text-center text-red-500 font-dm font-bold text-2xl py-4">
          {errorMsg}
        </div>

        <div className="flex flex-col items-center gap-y-[30px]">
          {todo.map((item) => (
            <TodosArea
              key={item.id}
              title={item.todoTitle}
              task={item.todoTask}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              handleShare={() => handleShare(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
