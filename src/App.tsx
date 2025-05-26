import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center px-6 py-10">
      <div className="max-w-screen-sm w-full">
        {/* ===== Header ===== */}
        <Header />

        {/* ===== Todo pannel ===== */}
        <TodoList />

        {/* ===== Footer ===== */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
