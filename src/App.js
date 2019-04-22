import React, {
    Component
} from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ''
        }
        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        // this.completeTodo = this.completeTodo.bind(this);
        this.sortTodo = this.sortTodo.bind(this);
    }

    addTodo(event) {
      var apiKey = "ce717a44505a015565790b36630db8c11e097e4a8ab2af890880f9a502b8758e";
      var self = this;
        event.preventDefault();
        var data = {
          text: this.state.input
        }
        var loadTodos = new XMLHttpRequest();

    loadTodos.onreadystatechange = function () {
        // Wait for readyState = 4 & 200 response
        if (this.readyState == 4 && this.status == 200) {
            // parse JSON response
            self.setState({
                todos: [...self.state.todos, JSON.parse(this.responseText)]
            });
        } else if (this.readyState == 4) {

            // this.status !== 200, error from server
            console.log(this.responseText);

        }
    };
    loadTodos.open("POST", "https://api.kraigh.net/todos", true);
    loadTodos.setRequestHeader("Content-type", "application/json");
    loadTodos.setRequestHeader("x-api-key", apiKey);
    loadTodos.send(JSON.stringify(data));

        this.setState({
            input: ''
        });

    }


    onChange(event) {


        this.setState({
            input: event.target.value
        });
    }
    deleteTodo(event) {
        var apiKey = "ce717a44505a015565790b36630db8c11e097e4a8ab2af890880f9a502b8758e";
        var todoId = event.target.parentNode.id;
        var self = this;
        var deleteSendRequest = new XMLHttpRequest();
        deleteSendRequest.onreadystatechange = function () {
            // Wait for readyState = 4 & 200 response
            if (this.readyState == 4 && this.status == 200) {
                // parse JSON response
                // event.target.parentNode.remove();
                const remainingTodos = self.state.todos.filter((todo) => {
                    // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
                    if (todo.id !== todoId) {
                        return todo;
                    }
                });

                self.setState({
                    todos: remainingTodos
                });
            } else if (this.readyState == 4) {

                // this.status !== 200, error from server
                console.log(this.responseText);

            }
        };
        deleteSendRequest.open("DELETE", "https://api.kraigh.net/todos/" + todoId, true);
        deleteSendRequest.setRequestHeader("Content-type", "application/json");
        deleteSendRequest.setRequestHeader("x-api-key", apiKey);
        //send complete changes
        deleteSendRequest.send();


    }

    sortTodo(event) {
      console.log('hi');
      var todos = this.state.todos;

      todos.sort(function (a, b) {
        return a.text.localeCompare(b.text);
      })
      this.setState({todos: todos});
    }


    render() {
        return ( <
            section id = "todos" >
            <NewTodo addTodo = {this.addTodo}
            onChange = {this.onChange}
            updateTodo = {this.updateTodo}
            input = {this.state.input}/>
            <button onClick = {this.sortTodo} id="submit"> Sort </button>
            {this.state.todos.map((todo) =>
                    <Todo key = {todo.id}
                    id = {
                      todo.id
                    }
                    completed = {
                        todo.completed
                    }
                    text = {
                        todo.text
                    }
                    deleteTodo = {
                        this.deleteTodo
                    }
                    />
                )
            } <
            /section>
        );
    }
    componentDidMount() {
      const self = this;
        var apiKey = "ce717a44505a015565790b36630db8c11e097e4a8ab2af890880f9a502b8758e";

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //
                var todos = JSON.parse(xhttp.responseText);
                self.setState({todos: todos});
                console.log(todos);
            }
        };

        xhttp.open("GET", "https://api.kraigh.net/todos", true);
        xhttp.setRequestHeader("x-api-key", apiKey);
        xhttp.send();
        //display todos

    }
}

export default App;
