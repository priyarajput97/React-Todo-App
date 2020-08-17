import React, { Component, useState } from "react";
import ToDoItem from "./ToDoItem";
import AddTodo from "./AddTodo";

//make class to function component
const ToDoList = () => {
  //instead of normal state and setstate we will use useState method which will give us
  //state and setState method to change the state

  //note that we can name than anything here
  const [state, setState] = useState({
    toDos: [
      { id: 1, item: "Wake Up @ 7", status: true },
      { id: 2, item: "Take Shower", status: false },
      { id: 3, item: "Go To Work", status: false },
    ],
  });

  const addTodo = (todoName) => {
    todoName &&
      //to change the state we wil use only setState
      setState({
        toDos: [
          ...state.toDos,
          {
            id: state.toDos.length + 1,
            item: todoName,
            status: false,
          },
        ],
      });
  };

  const deleteTodo = (todo) => {
    setState({
      toDos: state.toDos.filter((todoItem) => todoItem.id !== todo.id),
    });
  };

  const updateStatus = (todo) => {
    setState({
      toDos: updateTodoListStatus(todo),
    });
  };

  function updateTodoListStatus(todo) {
    const selectedTodo = state.toDos.find(
      (todoItem) => todoItem.id === todo.id
    );
    selectedTodo.status = !selectedTodo.status;
    return state.toDos;
  }

  return (
    <div className="todo-list-container">
      {state.toDos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateStatus={updateStatus}
        />
      ))}
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

export default ToDoList;
