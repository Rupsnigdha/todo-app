import React, { useEffect, useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

function TodoList() {
  const getLocalItems = () => {
    let list = localStorage.getItem("todos");

    if (list) {
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return [];
    }
  };

  const [todos, setTodos] = useState(getLocalItems);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-container">
      <h1 className="brand-name">Doify</h1>
      <h2 className="tagline">Fast - Lightweight - Magical</h2>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
