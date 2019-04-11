import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div>
          <form id="new-entry">
              <input type="text" id="newText" placeholder="New ToDo..." />
              <a id="submit">ADD</a>
          </form>
      </div>
    );
  }
}

export default NewTodo;
