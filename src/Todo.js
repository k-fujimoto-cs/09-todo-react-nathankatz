import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
      super(props);
      this.state = {
          completed: this.props.completed
      }
      this.completeTodo = this.completeTodo.bind(this);
  }
  completeTodo(event) {
      var apiKey = "ce717a44505a015565790b36630db8c11e097e4a8ab2af890880f9a502b8758e";
      var todoId = event.target.parentNode.id;
      var self= this;
      var data = {
          completed: true
      };
      var completeSendRequest = new XMLHttpRequest();

      completeSendRequest.onreadystatechange = function () {
          // Wait for readyState = 4 & 200 response
          if (this.readyState == 4 && this.status == 200) {
              // parse JSON response

              self.setState({
                  completed: true
              });

          } else if (this.readyState == 4) {
              // this.status !== 200, error from server
              console.log(this.responseText);

          }
      };
      //use put
      completeSendRequest.open("PUT", "https://api.kraigh.net/todos/" + todoId, true);
      completeSendRequest.setRequestHeader("Content-type", "application/json");
      completeSendRequest.setRequestHeader("x-api-key", apiKey);
      completeSendRequest.send(JSON.stringify(data));

        // self.setState({todos: this.props.todos});
  }



  //
  render() {
    var className = "todo";
  if (this.state.completed) {
    className = "todo completed";
  }
    return (
      <div id={this.props.id} className={className}>
       <button className="check" onClick={this.completeTodo}></button>
       <p>{this.props.text}</p>
       <button className="delete" onClick={this.props.deleteTodo}>-</button>
     </div>
    );
  }
}



export default Todo;
