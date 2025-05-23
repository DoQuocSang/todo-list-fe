import type { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  onDeleteAllCompleted: () => void;
}

export default function TodoSummary({ todos, onDeleteAllCompleted }: TodoSummaryProps) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const remainingTodos = totalTodos - completedTodos;

  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl font-bold">Todo Summary</h2>
        <p>Total Todos: {totalTodos}</p>
        <p>Completed Todos: {completedTodos}</p>
        <p>Remaining Todos: {remainingTodos}</p>
      </div>

      {completedTodos > 0 && (
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={onDeleteAllCompleted}
            >
              Delete Completed Todos
            </button>
      )}
    </>
  )
}