import React, { Component } from 'react'

export class ToDoItem extends Component {
    onChangeHandler = () => {
        this.props.updateStatus(this.props.todo);
    }

    render() {
        const strikeThrough = this.props.todo.status ? 'strike-through' : '';
        return (
            <div className="todo-item">
                <input type="checkbox" className="custom-checkbox" checked={this.props.todo.status} onChange={this.onChangeHandler} />
                <h2 className={strikeThrough}>{this.props.todo.item}</h2>
                <div className="link" onClick={() => this.props.deleteTodo(this.props.todo)}>Delete</div>
            </div>
        );
    }
}

export default ToDoItem
