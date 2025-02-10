
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: false },
    { id: 3, text: "Build a project", completed: false }
  ]);

  // Function to mark a todo as completed
  const handleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div className="app">
      <h2>Todo List</h2>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App
