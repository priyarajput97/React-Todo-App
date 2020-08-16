import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import AddTodo from './AddTodo';

class ToDoList extends Component {

    constructor() {
        super();
        this.state = {
             toDos: [
                 {id: 1, item: 'Wake Up @ 7', status: true},
                 {id: 2, item: 'Take Shower', status: false},
                 {id: 3, item: 'Go To Work', status: false}
             ]
        }
    }

    addTodo = (todoName) => {
        todoName && this.setState({
            toDos: this.pushTodo(todoName)
        });
    }

    pushTodo(todoName) {
        this.state.toDos.push({id: this.state.toDos.length + 1, item: todoName, status: false});
        return this.state.toDos;
    }

    deleteTodo = (todo) => {
        this.setState({
            toDos: this.state.toDos.filter(todoItem => todoItem.id !== todo.id)
        });
    }

    updateStatus = (todo) => {
        this.setState({
            toDos: this.updateTodoListStatus(todo)
        })
    }

    updateTodoListStatus(todo) {
        const selectedTodo = this.state.toDos.find(todoItem => todoItem.id === todo.id);
        selectedTodo.status = !selectedTodo.status;
        return this.state.toDos;
    }

    render() {
        return (
            <div className="todo-list-container">
                {this.state.toDos.map(todo => <ToDoItem key={todo.id} todo={todo} deleteTodo={this.deleteTodo} 
                    updateStatus={this.updateStatus}/>)}
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default ToDoList;
