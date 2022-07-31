import React from 'react'
import useTodoStore from '../store/hooks/useTodoStore';

const TodoListFromAnotherComponent = () => {

  const todoStore = useTodoStore();
  const todoLists = todoStore.getStoreValue();

  return (
    <div>
      <h1>Todolist Another component</h1>
      {todoLists.map((item, idx) => (
        <div key={idx}>{item.value}</div>
      ))}
    </div>
  )
}

export default TodoListFromAnotherComponent