import { useState } from "react";
import { dummyData } from "./data/todo"
import AddTodoForm from "./components/AddTodoItemForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function handleCompleteChange(id: number, completed: boolean) {
    setTodos((prevTodos) => prevTodos.map((todo) => 
        todo.id === id ?  { ...todo, completed } : todo
    ));
  }

  function handleAddTodo(title: string) {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
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
        onDelete={() => {}}
      />
    </>
  )
}

export default App
