# Day 6
## Component Styling
### Inline styles: 

This is a basic way of styling React components. You can use the style prop in your JSX code and pass an object with CSS properties as its value.

```jsx

const styles = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px'
};

function MyComponent() {
  return <div style={styles}>This is my component</div>;
}

```

### CSS Modules: 

This is a way of writing CSS styles in separate files and importing them into your components. CSS Modules help to avoid class name collisions and improve modularity.

```jsx
// styles.module.css
.button {
  background-color: blue;
  color: white;
  padding: 10px;
}

// MyComponent.jsx
import styles from './styles.module.css';

function MyComponent() {
  return <button className={styles.button}>Click me</button>;
}
```

### CSS-in-JS libraries: 

These libraries allow you to write CSS styles using JavaScript syntax. One popular CSS-in-JS library is styled-components. With styled-components, you can define styles as components and pass props to change their styles dynamically.

```jsx

import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px;
`;

function MyComponent() {
  return (
    <div>
      <Button>Click me</Button>
      <Button primary>Submit</Button>
    </div>
  );
}
```

### CSS frameworks: 

You can also use popular CSS frameworks like Bootstrap or Material UI to style your React components. These frameworks provide pre-built components with predefined styles and classes that you can use in your project.

```jsx

import { Button } from 'react-bootstrap';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Button variant="success">Submit</Button>
    </div>
  );
}
```

Assignment: Finish the navigation of Home and Metric. Show Yellow background for the Home page and Green background for the Metric page. :)