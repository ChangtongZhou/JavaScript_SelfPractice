# React 8-6 Lec

## Refs {#refs}

#### What is Refs {#what-is-refs}

Refs provide a way to access DOM nodes or React elements created in the render method.

#### How to use Refs {#how-to-use-refs}

```jsx
import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputBox = React.createRef(); // here inputBox is real HTML DOM node
    this.numberComponent = React.createRef(); // here numberComponent is real HTML DOM node
  }

  render() {
    console.log(this.inputBox);
    console.log(this.numberComponent);
    return (
      <div>
        <input />
        <hr />
        <input ref={this.inputBox} />
        <hr />
        <Number number={1} ref={this.numberComponent} />
      </div>
    );
  }
}

class Number extends Component {
  render() {
    return <div>{this.props.number}</div>;
  }
}

render(<App />, document.getElementById('root'));
```

#### When to use Refs {#when-to-use-refs}

There are a few good use cases for refs:

* Managing focus, text selection, or media playback.
* Triggering imperative animations.
* Integrating with third-party DOM libraries like Jquery.

**Avoid using refs for anything that can be done declaratively.**

## Pure Component {#pure-component}

```jsx
import React, {Component} from 'react';

class App extends Component {}
class App extends React.Component {}

import React, {PureComponent} from 'react';

class App extends PureComponent {}
class App extends React.PureComponent {}
```

`PureComponent` is exactly the same as `Component` except that when props or state changes, `PureComponent` will do a shallow comparison on both props and state .

**A shallow comparison** check means that JS only checks that the value’s object ids are the same, not that their content is the same. The id here means the memory address for where JS stores the information for that particular object. 

i.e. Shallow check only checks if two pointers point to the same memory address

![](.gitbook/assets/img_3282.jpg)

A primitive \(primitive value, primitive data type\) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol \(new in ECMAScript 2015\).

All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

```javascript
// Using a string method doesn't mutate the string
var bar = 'baz';
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Using an array method mutates the array
var foo = [];
console.log(foo); // []
foo.push('plugh');
console.log(foo); // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ
```

```jsx
import React, {Component, PureComponent} from 'react';

class Pure extends PureComponent {
  render() {
    console.log('pure component render() called');
    return (
      <div>
        <h3>Pure Component</h3>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.id}</p>
        <button onClick={this.props.addOne}>Add One</button>
      </div>
    );
  }
}
class Regular extends Component {
  render() {
    console.log('component render() called');
    return (
      <div>
        <h3>Component</h3>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.id}</p>
        <button onClick={this.props.addOne}>Add One</button>
      </div>
    );
  }
}

class App extends Component {
  state = {number: 1, user: {username: 'a', id: 1}};
  addOne = () => {
    this.setState({number: this.state.number + 1});
  };
  render() {
    const {user, number} = this.state;
    user.id = number;
    console.log('current user: ', user);
    return (
      <div>
        <Pure user={user} addOne={this.addOne} />
        <Regular user={user} addOne={this.addOne} />
      </div>
    );
  }
}
```

#### When to use Pure component: {#when-to-use-refs}

* It is used to check large array of data which is passed as props efficiently

**Pure Component vs. Component:**

* Big diff: Pure component only does shallow checking/comparison

## High Order Component {#high-order-component}

A higher-order component \(HOC\) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature. **A higher-order component is a function that takes a component and returns a new component, for the concept of resuable component.**

**Note: High order function is a function returns a function**

\*\*\*\*

#### High Order Component Pattern {#high-order-component-pattern}

```jsx
import React, {Component} from 'react';

const higherOrderComponent = OldComponnet => {
  class NewComponent extends Component {
    render() {
      return <OldComponnet />;
    }
  }
  return NewComponent;
};
```

#### Basic Example {#basic-example}

We need to share some common values across a number of component.

Bad way:

```jsx
import React, {Component} from 'react';

const A = props => {
  return (
    <div>
      <A1 number={props.number} />
      <A2 number={props.number} />
      <A3 number={props.number} />
    </div>
  );
};

const B = props => {
  return <p>{props.number}</p>;
};

const C = props => {
  return <p>{props.number}</p>;
};

const A1 = props => {
  return <p>{props.number}</p>;
};

const A2 = props => {
  return <p>{props.number}</p>;
};

const A3 = props => {
  return <p>{props.number}</p>;
};

class App extends Component {
  state = {number: 10};
  render() {
    const {number} = this.state;
    return (
      <div>
        <A number={number} />
        <B number={number} />
        <C number={number} />
      </div>
    );
  }
}
```

Use HOC:

```jsx
const withNumberAndFunctions = OldComponent => {
  class NewComponent extends Component {
    render() {
      const number = 10;
      return <OldComponent number={number} />;
    }
  }
  return NewComponent;
};

const A1 = props => {
  return <p>{props.number}</p>;
};

const A2 = props => {
  return <p>{props.number}</p>;
};

const A3 = props => {
  return <p>{props.number}</p>;
};

const A = props => {
  return (
    <div>
      <WrappedA1 />
      <WrappedA2 />
      <WrappedA3 />
    </div>
  );
};

const B = props => {
  return <p>{props.number}</p>;
};

const C = props => {
  return <p>{props.number}</p>;
};

const WrappedA1 = withNumberAndFunctions(A1);

const WrappedA2 = withNumberAndFunctions(A2);

const WrappedA3 = withNumberAndFunctions(A3);

const WrappedB = withNumberAndFunctions(B);

const WrappedC = withNumberAndFunctions(C);

class App extends Component {
  render() {
    return (
      <div>
        <A />
        <WrappedB />
        <WrappedC />
      </div>
    );
  }
}
```

![](.gitbook/assets/img_3288.jpg)

![](.gitbook/assets/img_3286.jpg)



