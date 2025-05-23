import { useEffect, useState } from "react";
import type { Todo } from "../models/todo";

interface TodoItemProps {
  todo: Todo;
  onUpdateTodo: (todo: Todo) => void;
}

export function useTodoItem({ todo, onUpdateTodo }: TodoItemProps) {
  const [editable, setEditable] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(todo.title);
  }, [todo]);

  function toggleEdit() {
    setEditable(!editable);
  }

  function handleUpdateTodo() {
    const updatedTodo: Todo = {
      ...todo,
      title: input,
    };
    onUpdateTodo(updatedTodo);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "Escape":
        toggleEdit();
        break;

      case "Enter":
        toggleEdit();
        handleUpdateTodo();
        break;
      default:
        break;
    }
  }
  return {
    editable,
    input,
    setInput,
    handleKeyUp,
    toggleEdit,
  };
}
