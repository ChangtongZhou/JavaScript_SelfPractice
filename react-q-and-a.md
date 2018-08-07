# React Q&A

## How to update immutable state

Suppose we are building a todo app. We have an array `todos` to store all the todo list, and we have a function `addTodo` to add a new todo:

```jsx
import React, {Component, PureComponent} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  addTodo = () => {
    this.setState({todos: this.state.todos.push('hello')});
  };
  render() {
    return (
      <div>
        <button onClick={this.addTodo}>Add New</button>
        <ul>
          {this.state.todos.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
```

Why it's not working?

* You can not modify state directly. In the other word, you have to assign `todos` to a new array instead of modifying the old `todos` itself.
* `Array.push()` will return the length of the new array

How to fix it:

```jsx
import React, {Component, PureComponent} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // every todo should be like:
    // {
    //  text: '',
    //  completed: false
    // }
    this.state = {todos: []};
  }

  // Method 1:
  addTodo = () => {
      let curList = this.state.todos;
      curList.push('hello')
      this.setState({todos: curList});
  };
  
  // Method 2: (recommended)
  addTodo = () => {
      this.setState({todos: [...this.state.todos, 'hello']});
  };
  
  // Important!!!
  toggleTodo = (index) => {
    this.setState({
      todos: [
      ...this.state.todos.slice(0, index), 
      {
        ...this.state.todos[index], 
        completed: !this.state.todos[index].completed
      },
      ...this.state.todos.slice(index + 1)
      ]
    });    
  };
  
  deleteTodo = index => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1) 
      ]
    });
  };
  
  render() {
    return (
      <div>
        <button onClick={this.addTodo}>Add New</button>
        <ul>
          {this.state.todos.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
```

