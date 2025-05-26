import useTodo from "../../hooks/useTodos";
import AddTodoForm from "./AddTodoItemForm";
import TodoItem from "./TodoItem";
import TodoSummary from "./TodoSummary";

export default function TodoList() {
  const { todos, getFilteredTodos } = useTodo();

  return (
    <>
      <div className="flex flex-col justify-center gap-4 my-8">
        <AddTodoForm />

        {todos.length > 0 && (
          <div className="w-full bg-white shadow-lg rounded-lg p-4 border-b-4 border-red-500">
            {getFilteredTodos().map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}

            {getFilteredTodos().length === 0 && (
              <p className="text-center text-slate-600 font-medium">
                There is no item
              </p>
            )}

            <TodoSummary />
          </div>
        )}
      </div>
    </>
  );
}
