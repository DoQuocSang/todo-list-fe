import AddTodoForm from "./components/AddTodoItemForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodo from "./hooks/useTodos";

function App() {
  const { 
    todos,
    handleAddTodo,
    handleCompleteChange,
    handleDelete,
    handleDeleteAllCompleted
  } = useTodo();

  return (
    <>
       <h1 className="text-3xl font-bold text-red-500">
        Todo List
      </h1>
      
      <AddTodoForm onAddTodo={handleAddTodo}/>

      <TodoList 
        onCompleteChange={handleCompleteChange} 
        todos={todos} 
        onDelete={handleDelete}
      />

      <TodoSummary todos={todos} onDeleteAllCompleted={handleDeleteAllCompleted}/>
    </>
  )
}

export default App
