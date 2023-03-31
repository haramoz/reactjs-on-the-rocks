# Day 2
## JSX

Cocktail of HTML and Javascript. 

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```


### JSX -> HTML
JSX code is transpiled into regular JavaScript code using a tool like Babel. 

WTF is transpiled? 
The term "transpiling" is a combination of "translating" and "compiling". Babel is one of the famous library which does it.


## React components
A component is a *reusable* piece of code that encapsulates a specific part of a UI, such as a button, form, or table. 

## How to create functional components and class components.
React.js components can be either functional or class-based.

### Functional Components

... are typically used for simple, stateless components that don't require any lifecycle methods or state management.
```jsx
function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```
### Class Components
... extend the React.Component class. They can have their own internal state and can implement various lifecycle methods, such as *componentDidMount* and *componentDidUpdate*.

```jsx
class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}
```
- NOTE: In recent versions of React.js, functional components can also use state and lifecycle methods using hooks, which can simplify their implementation and make them more flexible. Since React 16.8. 

    We will still stick to use functional components for simpler case, where state and lifecycle hooks are not needed (Best Practise)


## Component props and state management.
- props are data that are passed down from a parent component to a child component. They are immutable, which means they cannot be changed by the child component. props are used to customize a component and pass data between components in a React.js application.

```jsx
//From LandingPage.js which has access to user.name variable

import {Welcome} from ../Welcome.js 

<Welcome name={user.name}>
```

- state, on the other hand, is data that is managed by a component and can be changed by the component itself. state is used to keep track of information that changes over time, such as form input, user authentication status, or component visibility.

```jsx
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  } 
  
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
        <ChildComponent message="Hello!" />
      </div>
    );
  }
}

function ChildComponent(props) {
  return <p>{props.message}</p>;
}

```

## Axios

... for making HTTP requests in React.js applications

Do not mix in a project both Fetch and Axios, they are alternative to each other. (Best Practise)

```jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

Assignment: Create a POST method with axios. Console log the output or part of it. :)