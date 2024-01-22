import React, { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function TodoForm() {
  const [todoM, setTodoM] = useState("");
  const { addTodo } = useTodo();

  const btnAdd = (e) => {
    e.preventDefault();
    if (!todoM) return;
    addTodo({ todoM, completed: false });
    setTodoM("");
  };

  return (
    
      <form onSubmit={btnAdd} className="flex ">
        <input
          type="text"
          placeholder="Write todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todoM}
          onChange={(e) => setTodoM(e.target.value)}
        />
        <button
          type="submit"
          className=" bg-blue-700 py-1.5 px-3 text-white shrink-0 shadow-lg rounded-r-lg"
        >
          Add
        </button>
      </form>
  
  );
}

export default TodoForm;

