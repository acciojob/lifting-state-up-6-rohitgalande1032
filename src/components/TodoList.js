// TodoList.js
import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            {
              <button style={{display: todo.completed ? "none" : "inline-block"}} onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
/*
// TodoList.js
import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2> 
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            {!todo.completed && (
              <button
                onClick={() => handleComplete(todo.id)}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
*/