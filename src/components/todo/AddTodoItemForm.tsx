import { useState } from "react";
import { useTodoStore } from "../../store/todo.store";

export default function AddTodoForm() {
  const [input, setInput] = useState("");
  const handleAddTodo = useTodoStore((state) => state.handleAddTodo);
  const handleCompleteAllItems = useTodoStore(
    (state) => state.handleCompleteAllItems
  );

  function onAddTodo() {
    if (input.trim() === "") return;
    handleAddTodo(input);
    setInput("");
  }

  function onCompleteAllItems() {
    handleCompleteAllItems();
  }

  return (
    <div className="flex item-center rounded-lg shadow-lg bg-white text-slate-700">
      <button onClick={onCompleteAllItems} className="cursor-pointer px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <input
        type="text"
        name="main-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onAddTodo();
          }
        }}
        className="px-4 py-4 w-full focus:outline-none focus:ring-2 rounded-lg focus:ring-red-500 border-none transition-all duration-150 ease-in"
        placeholder="What need to be done?"
      />
    </div>
  );
}
