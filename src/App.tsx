import React from 'react';
import './App.css';
import {AppTodo} from "./components/Todolist/AppTodo";
import {TodoProvider} from "./providers/TodoProvider";

function App() {
  return (
    <div className="App">
        <TodoProvider>
            <AppTodo/>
        </TodoProvider>
    </div>
  );
}

export default App;
