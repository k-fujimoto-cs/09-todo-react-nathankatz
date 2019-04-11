import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div id="01234" className="todo">
        <button className="check"></button>
        <p>Do A thing</p>
        <button className="delete">-</button>
      </div>
    );
  }
}

export default Todo;
