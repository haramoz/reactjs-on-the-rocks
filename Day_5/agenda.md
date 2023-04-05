# Day 5
## Conditional Rendering
... displaying certain elements or components based on specific conditions.

Option 1: logical && operator based

```jsx
function WelcomeMessage(props) {
  return (
    <div>
      {props.showWelcome && <h1>Welcome to the website!</h1>}
    </div>
  );
}
```

Option 2: Ternary operator based

```jsx
function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}
```

Option 3: Early return based

```jsx

function UserDetails(props) {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div>Error: {props.error.message}</div>;
  }

  if (props.user) {
    return (
      <div>
        <h1>{props.user.name}</h1>
        <p>{props.user.email}</p>
      </div>
    );
  }

  return <div>No user data available.</div>;
}
```
## Some common tasks

### How to render lists 
```jsx
const todos = [
  { id: 1, text: 'Buy groceries' },
  { id: 2, text: 'Clean the house' },
  { id: 3, text: 'Finish project' },
];

const todoItems = todos.map((todo) =>
  <li key={todo.id}>{todo.text}</li>
);

ReactDOM.render(
  <ul>{todoItems}</ul>,
  document.getElementById('root')
);

```
### The importance of the key prop

When working with components in a list, using unique keys helps React maintain each component's state correctly. If keys are missing or not unique, the state of some components might be lost or associated with the wrong element when the list is updated, resulting in unexpected behavior.

```jsx
const todos = [
  { id: 1, text: 'Buy groceries' },
  ...,
];

//todo.id key prop should be unique here 

<li key={todo.id}>{todo.text}</li>
```
### How to map over arrays and render list items in React.
... The map() function is used to iterate over the supplied array, creating a new array of JSX elements 

```jsx
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

const listItems = fruits.map((fruit, index) =>
  <li key={index}>{fruit}</li>
);

```
... The .map() function is a widely used higher-order function in JavaScript for transforming arrays. It returns a new array by applying a callback function to each element of the original array.

```jsx

const users = [{ name: 'John' }, { name: 'Jane' }];
const userNames = users.map(user => user.name);

```
Use .map() for transformation, not filtering. (Best practice)

### Navigation 
React Router way 

- npm install react-router-dom@6


```jsx
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          {/* Nested route */}
          <Route path=":userId" element={<User />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

```

Assignment: Try to implement a React router based navigation for Home, Metrics that we can use in Next Reply dashboard.