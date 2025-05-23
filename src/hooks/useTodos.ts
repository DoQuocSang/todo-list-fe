import { useEffect, useState } from "react";
import type { Todo } from "../models/todo";
import { dummyData } from "../data/todo";
import type { Tab } from "../models/tab";

export default function useTodo() {
  const [todos, setTodos] = useState(getTodosFromSessionStorage);

  function getTodosFromSessionStorage() {
    const todosFromSessionStorage: Todo[] = JSON.parse(
      sessionStorage.getItem("todos") || "[]"
    );
    return todosFromSessionStorage.length > 0
      ? todosFromSessionStorage
      : dummyData;
  }

  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleCompleteChange(id: number, completed: boolean) {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function handleAddTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevTodos: Todo[]) => [...prevTodos, newTodo]);
  }

  function handleUpdateTodo(updatedTodo: Todo) {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  }

  function handleDelete(id: number) {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleDeleteAllCompleted() {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.filter((todo) => !todo.completed)
    );
  }

  function countCompletedItems() {
    return todos.filter((todo) => todo.completed).length;
  }

  function counItemsLeft() {
    return todos.filter((todo) => !todo.completed).length;
  }

  function handleCompleteAllItems() {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo) => {
        if (
          countCompletedItems() === 0 ||
          counItemsLeft() === 0 ||
          !todo.completed
        ) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function handleChangeFilterType(filterType: Tab): Todo[] {
    switch (filterType) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return {
    todos,
    counItemsLeft,
    handleCompleteChange,
    handleCompleteAllItems,
    handleAddTodo,
    handleUpdateTodo,
    handleDelete,
    handleDeleteAllCompleted,
    handleChangeFilterType,
  };
}
