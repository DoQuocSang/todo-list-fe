import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import TodoList from "./components/todo/TodoList";
import useTodo from "./hooks/useTodos";

function App() {
  const {
    todos,
    counItemsLeft,
    handleAddTodo,
    handleUpdateTodo,
    handleCompleteChange,
    handleCompleteAllItems,
    handleDelete,
    handleDeleteAllCompleted,
    handleChangeFilterType,
  } = useTodo();

  return (
    <div className="bg-gray-50 h-full flex justify-center px-6 py-10">
      <div className="max-w-screen-sm w-full">
        {/* ===== Header ===== */}
        <Header />

        {/* ===== Todo pannel ===== */}
        <TodoList
          counItemsLeft={counItemsLeft}
          onAddTodo={handleAddTodo}
          onUpdateTodo={handleUpdateTodo}
          onCompleteChange={handleCompleteChange}
          onCompleteAllItems={handleCompleteAllItems}
          todos={todos}
          onDelete={handleDelete}
          onDeleteAllCompleted={handleDeleteAllCompleted}
          onChangeFilterType={handleChangeFilterType}
        />
        {/* ===== Footer ===== */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
