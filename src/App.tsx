import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";

function App() {
  const todos: string[] = ["Wäsche waschen", "Einkaufen", "Müll rausbringen"]

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList todosToShow={todos}/>
    </div>
  );
}

export default App;
