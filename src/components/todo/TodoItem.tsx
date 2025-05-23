import type { Todo } from "../../models/todo";
import { useTodoItem } from "../../hooks/useTodoItem";

interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
  onUpdateTodo: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompleteChange,
  onUpdateTodo,
  onDelete,
}: TodoItemProps) {
  const { editable, input, setInput, handleKeyUp, toggleEdit } = useTodoItem({
    todo,
    onUpdateTodo,
  });

  return (
    <div className="relative group hover:bg-slate-100 hover:-mx-4 hover:px-4 flex items-center gap-4 text-slate-600 border-b boder-slate-200 py-2">
      {editable ? (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            handleKeyUp(e);
          }}
          className="flex-1 font-semibold text-base px-4 py-2 border-2 border-teal-500 rounded-lg focus:outline-none focus:border-teal-500 transition-all duration-150 ease-in-out"
        />
      ) : (
        <>
          <input
            name=""
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
            className="relative peer forced-colors:appearance-auto appearance-none cursor-pointer w-5 h-5 bg-red-100 rounded border-none focus:ring-0 focus:ring-transparent checked:bg-emerald-500 transition-all duration-150 ease-in-out"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            className="size-5 hidden peer-checked:block absolute text-white pointer-events-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>

          <p
            className={
              "flex-1 select-none font-semibold text-lg transition-all duration-150 ease-in-out " +
              (todo.completed
                ? "line-through text-slate-400"
                : "text-slate-600")
            }
            onDoubleClick={toggleEdit}
          >
            {todo.title}
          </p>

          <button
            onClick={() => onDelete(todo.id)}
            className="cursor-pointer absolute top-1/2 right-0 group-hover:right-4 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
