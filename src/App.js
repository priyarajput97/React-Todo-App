import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>To do List</h1>
      </header>

      <ToDoList />
    </div>
  );
}

export default App;
