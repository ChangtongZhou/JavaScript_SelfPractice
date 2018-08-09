# React Router 8-6 Lec

## React Router Basic {#react-router-basic}

React is a popular library for creating single-page applications \(SPAs\) that are rendered on the client side. An SPA might have multiple views \(aka pages\), and unlike the conventional multi-page apps, navigating through these views shouldn’t result in the entire page being reloaded. Instead, we want the views to be rendered inline within the current page.

Routing is the process of keeping the browser URL in sync with what’s being rendered on the page. React Router lets you handle routing declaratively. The declarative routing approach allows you to control the data flow in your application, by saying “the route should look like this”:

```text
<Route path="/about" component={About} />
```

#### Installation {#installation}

React Router has been broken into three packages: react-router, react-router-dom, and react-router-native.

You should almost never have to install react-router directly. That package provides the core routing components and functions for React Router applications. The other two provide environment specific \(browser and react-native\) components.

```text
npm install react-router-dom --save
```

### Router

There are two types of router in `react-router-dom`: the `<BrowserRouter>` and `<HashRouter>`. The `<BrowserRouter>` should be used when you have a server that will handle dynamic requests \(knows how to respond to any possible URI\), while the `<HashRouter>` should be used for static websites \(can only respond to requests for files that it knows about\). Usually it is preferable to use a `<BrowserRouter>`.

```text
// <BrowserRouter>
http://example.com/about
http://example.com/users

// <HashRouter>
http://example.com/#/about
http://example.com/#/users
```

### Route

The `<Route>` component is the most important component in React router. It renders some UI if the current location matches the route’s path. Ideally, a component should have a prop named path, and if the pathname is matched with the current location, it gets rendered.

Suppose we already have `<Home>`, `<About>`, `<Users>` three React components defined:

* You want to see the page rendering `<Home>` component if you go to the url `/`
* You want to see the page rendering `<About>` component if you go to the url `/about`
* You want to see the page rendering `<Users>` component if you go to the url `/users`

```text
import {BrowserRouter, Route} from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

/* About component */
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

/* Users component */
const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}
```

### Link

The `<Link>` component is used to navigate between pages. It’s comparable to the HTML anchor element. However, using anchor links would result in a browser refresh, which we don’t want. So instead, we can use to navigate to a particular URL and have the view re-rendered without a browser refresh.

```text
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/users">Users</Link>
```

In the example:

* We use the `<Link>` component to create a simple text UI, set "/" as the value of the `to` props, which will make the page go to `/` if you click it.
* We use the `<Link>` component to create a simple text UI, set "/about" as the value of the `to`props, which will make the page go to `/about` if you click it.
* We use the `<Link>` component to create a simple text UI, set "/users" as the value of the `to`props, which will make the page go to `/users` if you click it.

#### Demo {#demo}

```text
import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

/* About component */
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

/* Users component */
const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);

/* App component */
class App extends Component {
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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}
```

You will notice that there is a little bug in this demo: When you click `About` or `Users`, you can still see the text Home in the UI. This is because `/about` matches both `/` and `/about` and `/users`matches both `/` and `/users`. That's why you will see the extra "Home" text. If you want to avoid that and want a route to be rendered only if the path is exactly the same, you should use the `exact` props in `<Route>`.

```text
<Route exact={true} path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/users" component={Users} />
```

### Switch

Think about what will happen if you go to `/users` in the following code:

```text
/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

/* About component */
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

/* Users component */
const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);
/* AnotherPage component */
const AnotherPage = () => (
  <div>
    <h2>Another Page</h2>
  </div>
);

/* App component */
class App extends Component {
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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/anotherPage">Another Page</Link>
              </li>
            </ul>
          </nav>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/:pageName" component={AnotherPage} />
        </div>
      </BrowserRouter>
    );
  }
}
```

If the URL is `/users`, all the routes that match the location `/users` are rendered. So, the `<Route>`with path :pageName gets rendered along with the Users component. This is by design. However, if this is not the behavior you’re expecting, you should add the `<Switch>` component to your routes. With `<Switch>,` only the first child `<Route>` that matches the location gets rendered.

```text
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

/* About component */
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

/* Users component */
const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);
/* AnotherPage component */
const AnotherPage = () => (
  <div>
    <h2>Another Page</h2>
  </div>
);

/* App component */
class App extends Component {
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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/anotherPage">Another Page</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/:pageName" component={AnotherPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
```

What will happen if we define the routes in the following order?

```text
<Switch>
  <Route exact={true} path="/" component={Home} />
  <Route path="/:pageName" component={AnotherPage} />
  <Route path="/about" component={About} />
  <Route path="/users" component={Users} />
</Switch>
```

When you go to `/users`, the `/:pageName` will get matched first and the `<AnotherPage>` component will be rendered. Since `<Switch>` will only render the first matched route, so `<Users>` will never be rendered.

In that case, we have a specific `<Route>` to handle `/about` or `/users`. We need to put the route for `/:pageName` after `/about` and `/users`.

## Handle the URL navigation inside a function

### History

The [`history`](https://github.com/ReactTraining/history) package is one the only two major dependencies of React Router. It is a JavaScript library that lets you easily manage session history anywhere JavaScript runs.

It is used to track your url history.

With `history`, you can navigate across your browser history stack easily:

* history.push\(path, \[state\]\) - \(function\) Pushes a new entry onto the history stack
* history.goBack\(\) - \(function\) go back one page
* history.goForward\(\) - \(function\) go forward one page

### withRouter

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
// here we used withRouter HOC to add "history" property into Login component 

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

## How to get history

Every component which is in Routes component props has three more props by default: match , location, history.

```text
<Route path="/" component={Home} />
```

If we using the render syntax, the component won't have those three props, you have to use withRouter to get that.

```text
<Route path="/" render={() => <Home />} />
```

Use withRouter will give component history and the closest match and location;

```text
import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

/* Home component */
const Home = props => {
  console.log('props in Home:');
  console.log(props);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

/* About component */
const About = props => {
  console.log('props in About:');
  console.log(props);
  return (
    <div>
      <h2>About</h2>
      <Button />
    </div>
  );
};

/* Users component */
const Users = props => {
  console.log('props in User:');
  console.log(props);
  return (
    <div>
      <h2>User</h2>
      <WithRouterButton />
    </div>
  );
};

const Button = props => {
  console.log('props in Button:');
  console.log(props);
  return <button>Button</button>;
};

const WithRouterButton = withRouter(Button);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}
```

#### Exmaple 1 - Component in `<Route>` {#exmaple-1---component-in-route}

```text
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

