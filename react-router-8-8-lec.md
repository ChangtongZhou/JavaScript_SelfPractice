# React Router 8-8 Lec

## Nested Routing

### Match

### Location

Note: Match and location both stores info that describes an url

## Redirect

`<Redirect>` will replace the current location in the history stack with a new location. The new location is specified by the `to` prop. Here’s how we’ll be using `<Redirect>.`

```javascript
<Redirect to={{pathname: '/login', state: {from: props.location}}} />
```

Note: here **state** is an object for you to pass anything

`state: {from: props.location}` tells the component where it came from

## Protected Routes

So after we know how to use `<Redirect>`, let's take a look how to write a protected route.

```jsx
/* Admin component */
const Admin = () => (
  <div>
    <h2>Admin Page - After login</h2>
  </div>
);

/* Login component */
const Login = props => {
  if (props.authenticated) {
    return <Redirect to={{pathname: '/'}} />;
  } else {
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={props.loginHandler}>Login</button>
      </div>
    );
  }
};

/* Home component */
const Home = props => {
  if (props.authenticated) {
    return <Admin />;
  } else {
    return <Redirect to={{pathname: '/login'}} />;
  }
};

/* App component */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {authenticated: false};
  }
  loginHandler = () => {
    this.setState({authenticated: true});
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => <Home authenticated={this.state.authenticated} />}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  authenticated={this.state.authenticated}
                  loginHandler={this.loginHandler}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
```

#### Use `history.push()` for protected route {#use-historypush-for-protected-route}

Instead of using `<Redirect />` to protect routes, we can also use `history.push()`.

```jsx
import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  withRouter,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

/* Admin component */
const Admin = () => (
  <div>
    <h2>Admin Page - After login</h2>
  </div>
);

class Login extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.history.push('/');
    }
  }
  login = () => {
    this.props.loginHandler();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
class Home extends Component {
  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/login');
    }
  }
  render() {
    return <Admin />;
  }
}

const WithRouterLogin = withRouter(Login);
const WithRouterHome = withRouter(Home);

/* App component */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {authenticated: false};
  }
  loginHandler = () => {
    this.setState({authenticated: true});
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => (
                <WithRouterHome authenticated={this.state.authenticated} />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <WithRouterLogin
                  authenticated={this.state.authenticated}
                  loginHandler={this.loginHandler}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
```

* Why we need a extra login function inside `<Login>`?
  * Ans: b/c inside login component, we only check if the componentdidmount, once the component is mounted, this function will not get called again, so we need to destroy that by pushing a new route to re-render
* Why we need to use withRouter?
  * Ans: get access to history
* Why we did not use `<Route path="/" component={Home} />`?
  * Ans: we need to pass extra props into our Home component

