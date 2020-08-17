import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoName: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ todoName: event.target.value });
  };

  addTodoToList = () => {
    this.props.addTodo(this.state.todoName);
    this.setState({ todoName: "" });
  };

  render() {
    return (
      <div className="add-todo">
        <form>
          <input
            className="custom-input"
            type="text"
            placeholder="Enter a new todo here"
            value={this.state.todoName}
            onChange={this.onChangeHandler}
          />
          <div className="custom-button" onClick={this.addTodoToList}>
            Add
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
