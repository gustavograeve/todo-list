import * as React from "react";
import TodoList from "../../components/TodoList/TodoList";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Lista de Tarefas</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
