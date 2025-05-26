import { useTodoStore } from "../../store/todo.store";
import type { Tab } from "../../models/tab";

export default function TodoSummary() {
  const todos = useTodoStore((state) => state.todos);
  const countActiveItems = useTodoStore((state) => state.countActiveItems);
  const handleChangeFilterType = useTodoStore(
    (state) => state.handleChangeFilterType
  );
  const handleDeleteAllCompleted = useTodoStore(
    (state) => state.handleDeleteAllCompleted
  );

  function onChangeFilterType(tab: Tab) {
    handleChangeFilterType(tab);
  }

  function onDeleteAllCompleted() {
    handleDeleteAllCompleted();
  }

  return (
    <div
      className={
        "flex items-center justify-between " + (todos.length > 0 ? "mt-4" : "")
      }
    >
      <p className="text-sm flex justify-center items-center gap-2">
        <span className="text-red-500 font-bold text-xl">
          {countActiveItems()}
        </span>
        item left
      </p>

      <div className="space-x-2">
        <button
          onClick={() => onChangeFilterType("all")}
          className="cursor-pointer text-sm text-slate-700 rounded-lg hover:text-white hover:bg-red-500 px-2 py-1 transition-all duration-150 ease-in"
        >
          All
        </button>
        <button
          onClick={() => onChangeFilterType("active")}
          className="cursor-pointer text-sm text-slate-700 rounded-lg hover:text-white hover:bg-gray-500 px-2 py-1 transition-all duration-150 ease-in"
        >
          Active
        </button>
        <button
          onClick={() => onChangeFilterType("completed")}
          className="cursor-pointer text-sm text-slate-700 rounded-lg hover:text-white hover:bg-emerald-500 px-2 py-1 transition-all duration-150 ease-in"
        >
          Completed
        </button>
      </div>

      <button
        onClick={onDeleteAllCompleted}
        className="cursor-pointer text-sm text-slate-700 rounded-lg hover:text-white hover:bg-red-500 px-2 py-1 transition-all duration-150 ease-in"
      >
        Clear Completed
      </button>
    </div>
  );
}
