import { useState } from "react";

interface AddTodoFormProps {
  onAddTodo: (title: string) => void;
}

export default function AddTodoForm({onAddTodo}: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleAddTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim() === "") return;
    onAddTodo(input);
    setInput("");
  }
  return (
    <form 
        className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4"
        onSubmit={handleAddTodo}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="flex-1 p-2 border border-gray-300 rounded-lg mr-4"
        placeholder="Add a new todo..."
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add Todo
      </button>
    </form>
  );
}
