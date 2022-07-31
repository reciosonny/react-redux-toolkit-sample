import React, { useState } from "react";
import useTodoStore from "../store/hooks/useTodoStore";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const todoStore = useTodoStore();
  const todoLists = todoStore.getStoreValue();

  const onSubmit = (e: any) => {
    e.preventDefault();
    todoStore.dispatchAddTodo({ value: inputVal });
    setInputVal('');
  }

  return (
    <div>
      <h1>Todo sample</h1>
      {todoLists.map((item, idx) => (
        <div key={idx}>{item.value}</div>
      ))}

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="add new todo"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
      </form>
    </div>
  );
};

export default Todo;
