# React Router 8-6 Lec



## History

The [`history`](https://github.com/ReactTraining/history) package is one the only two major dependencies of React Router. It is a JavaScript library that lets you easily manage session history anywhere JavaScript runs.

It is used to track your url history.

With `history`, you can navigate across your browser history stack easily:

* history.push\(path, \[state\]\) - \(function\) Pushes a new entry onto the history stack
* history.goBack\(\) - \(function\) go back one page
* history.goForward\(\) - \(function\) go forward one page

## withRouter

**You can have the access to the `history` object in any React component inside `<BrowserRouter>` via the `withRouter` higher-order component from React router.**

withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.

```jsx
import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

/* Login component */
const Login = props => {
  console.log(props);
  return (
    <div>
      <h2>Login</h2>
      <button
        onClick={() => {
          props.history.push('/');
        }}>
        Login
      </button>
    </div>
  );
};

const WithRouterLogin = withRouter(Login);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/login" component={WithRouterLogin} />
        </div>
      </BrowserRouter>
    );
  }
}
```

