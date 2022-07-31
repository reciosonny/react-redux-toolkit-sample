import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/features/counter/Counter';
import './App.css';
import AnotherComponent from './components/AnotherComponent';
import NestedComponent from './components/NestedComponent';
import Todo from './components/Todo';
import TodoListFromAnotherComponent from './components/TodoListFromAnotherComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AnotherComponent />
        <NestedComponent />

        <Todo />
        <TodoListFromAnotherComponent />

      </header>
    </div>
  );
}

export default App;
