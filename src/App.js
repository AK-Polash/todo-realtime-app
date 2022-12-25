import React, { useEffect, useRef, useState } from "react";
import InputArea from "./components/InputArea";
import TodosArea from "./components/TodosArea";
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  remove,
  update,
} from "firebase/database";

function App() {
  let db = getDatabase();
  let [title, setTitle] = useState("");
  let [task, setTask] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [todo, setTodo] = useState([]);
  let [show, setShow] = useState(false);
  let titleInputRef = useRef();
  let taskInputRef = useRef();
  let [clickedId, setClickedId] = useState("");

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
          console.log("Add hoise");
        })
        .catch((error) => {
          console.log("Error: ", error);
        });

      setErrorMsg("");
      setTitle("");
      setTask("");
      titleInputRef.current.value = "";
      taskInputRef.current.value = "";
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

  // Handle Delete:
  let handleDelete = (id) => {
    remove(ref(db, "Todos/" + id))
      .then(() => console.log("Delete hoise"))
      .catch((error) => console.log("Error: ", error));

    setShow(false);
    titleInputRef.current.value = "";
    taskInputRef.current.value = "";
    setErrorMsg("");
  };

  // Handle Edit:
  let handleEdit = (id, todoTitle, todoTask) => {
    setShow(true);
    setClickedId(id);
    titleInputRef.current.value = todoTitle;
    taskInputRef.current.value = todoTask;
  };

  // Handle Share:
  let handleShare = (id) => {
    console.log(id);
  };

  // Handle Update:
  let handleUpdate = () => {
    if (!titleInputRef.current.value) {
      setErrorMsg("naam nai");
    } else if (!taskInputRef.current.value) {
      setErrorMsg("kaj nai");
    } else {
      setShow(!show);

      update(ref(db, "Todos/" + clickedId), {
        todoTitle: titleInputRef.current.value,
        todoTask: taskInputRef.current.value,
      })
        .then(() => console.log("Update hoise"))
        .catch((error) => console.log("Error: ", error));

      setTitle("");
      setTask("");
      titleInputRef.current.value = "";
      taskInputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="w-full bg-flat">
        <InputArea
          handleInputTitle={handleInputTitle}
          handleInputTask={handleInputTask}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          show={show}
          titleInputRef={titleInputRef}
          taskInputRef={taskInputRef}
        />

        <div className="text-center text-red-500 font-dm font-bold text-2xl py-4">
          {errorMsg}
        </div>

        <div className="flex flex-col-reverse items-center gap-y-[30px]">
          {todo.map((item) => (
            <TodosArea
              key={item.id}
              title={item.todoTitle}
              task={item.todoTask}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() =>
                handleEdit(item.id, item.todoTitle, item.todoTask)
              }
              handleShare={() => handleShare(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
