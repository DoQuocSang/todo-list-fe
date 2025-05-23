import { useState } from "react";
import type { Tab } from "../../models/tab";
import type { Todo } from "../../models/todo";
import AddTodoForm from "./AddTodoItemForm";
import TodoItem from "./TodoItem";
import TodoSummary from "./TodoSummary";

interface TodoListProps {
  todos: Todo[];
  onAddTodo: (title: string) => void;
  onUpdateTodo: (todo: Todo) => void;
  onCompleteChange: (id: number, completed: boolean) => void;
  onCompleteAllItems: () => void;
  onDelete: (id: number) => void;
  onDeleteAllCompleted: () => void;
  counItemsLeft: () => number;
  getFilteredTodos: (filterType: Tab) => Todo[];
}

export default function TodoList({
  todos,
  counItemsLeft,
  onAddTodo,
  onUpdateTodo,
  onCompleteChange,
  onCompleteAllItems,
  onDelete,
  onDeleteAllCompleted,
  getFilteredTodos,
}: TodoListProps) {
  const [filterType, setFilterType] = useState<Tab>("all");

  function handleChangeFilterType(tab: Tab) {
    setFilterType(tab);
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-4 my-8">
        <AddTodoForm
          onAddTodo={onAddTodo}
          onCompleteAllItems={onCompleteAllItems}
        />

        {todos.length > 0 && (
          <div className="w-full bg-white shadow-lg rounded-lg p-4 border-b-4 border-red-500">
            {getFilteredTodos(filterType).map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onCompleteChange={onCompleteChange}
                onDelete={onDelete}
                onUpdateTodo={onUpdateTodo}
              />
            ))}

            {getFilteredTodos(filterType).length === 0 && (
              <p className="text-center text-slate-600 font-medium">
                There is no item
              </p>
            )}

            <TodoSummary
              counItemsLeft={counItemsLeft}
              todos={todos}
              onDeleteAllCompleted={onDeleteAllCompleted}
              onChangeFilterType={handleChangeFilterType}
            />
          </div>
        )}
      </div>
    </>
  );
}
