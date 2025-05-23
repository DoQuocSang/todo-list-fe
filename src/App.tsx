import { useState } from "react";
import { dummyData } from "./data/todo"
import AddTodoForm from "./components/AddTodoItemForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function handleCompleteChange(id: number, completed: boolean) {
    setTodos((prevTodos) => prevTodos.map((todo) => 
        todo.id === id ?  { ...todo, completed } : todo
    ));
  }

  function handleAddTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function handleDelete(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleDeleteAllCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

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
