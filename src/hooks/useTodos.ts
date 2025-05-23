import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";
import { dummyData } from "../data/todo";

export default function useTodo() {
   const [todos, setTodos] = useState(getTodosFromSessionStorage);

  function getTodosFromSessionStorage() {
    const todosFromSessionStorage: Todo[] =  JSON.parse(sessionStorage.getItem("todos") || "[]"); 
    return todosFromSessionStorage.length > 0 ? todosFromSessionStorage : dummyData;
  }

  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));  
  }, [todos]);

  function handleCompleteChange(id: number, completed: boolean) {
    setTodos((prevTodos: Todo[]) => prevTodos.map((todo) => 
        todo.id === id ?  { ...todo, completed } : todo
    ));
  }

  function handleAddTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevTodos: Todo[]) => [...prevTodos, newTodo]);
  }

  function handleDelete(id: number) {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleDeleteAllCompleted() {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo) => !todo.completed));
  }

  return {
    todos,
    handleCompleteChange,
    handleAddTodo,
    handleDelete,
    handleDeleteAllCompleted
  }
}