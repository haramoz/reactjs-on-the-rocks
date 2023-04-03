# Day 3
## Component lifecycle methods
components have a lifecycle that describes the various stages a component goes through during its existence. 

- Initialization: This is the stage where a component is created and initialized with default props and state. This stage is called the constructor method.

- Mounting: In this stage, the component is inserted into the DOM and rendered for the first time. This stage includes several lifecycle methods:

    - componentWillMount(): This method is called just before the component is mounted. It is recommended to avoid using this method and use componentDidMount() instead (Best Practices).

      Misleading name: The name componentWillMount() suggests that the method is called right before the component is mounted to the DOM. In reality, this method is called during the rendering phase and not right before the actual DOM mounting. This discrepancy has led to confusion and incorrect usage among developers.

    - render(): This method is called to generate the HTML that is rendered to the screen.

    - componentDidMount(): This method is called after the component is mounted, and the HTML is rendered to the screen.

- Updating: This stage is triggered when a component's props or state change. This stage includes several lifecycle methods:

    - componentWillReceiveProps(nextProps): This method is called before a component receives new props. It is used to update the component's state based on the new props.

    - shouldComponentUpdate(nextProps, nextState): This method is used to determine whether or not the component should be updated. It is used to improve performance by avoiding unnecessary re-renders.

    - componentWillUpdate(nextProps, nextState): This method is called just before the component is updated. It is used to perform any necessary cleanup or preparation before the update.

    - render(): This method is called again to generate the new HTML based on the updated props or state.

    - componentDidUpdate(prevProps, prevState): This method is called after the component is updated and the new HTML is rendered to the screen.

- Unmounting: This stage is triggered when a component is removed from the DOM. This stage includes one lifecycle method:

    - componentWillUnmount(): This method is called just before the component is unmounted. It is used to perform any necessary cleanup, such as removing event 

    import React, { Component } from 'react';
  Example of ComponentWillUnmount:    
  ```jsx
  class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: 0,
      };
    }

    componentDidMount() {
      this.timerID = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    }

    componentWillUnmount() {
      // Clean up the interval when the component is unmounted
      clearInterval(this.timerID);
    }

    render() {
      return (
        <div>
          <h1>Elapsed Time: {this.state.time} seconds</h1>
        </div>
      );
    }
  }
  ```
### State management & Lifecycle methods
The lifecycle methods are used to manage the state of a component at different stages of its existence. 

- Initialization & Mounting: componentDidMount() or getDerivedStateFromProps() ... constructor method

- Updating: shouldComponentUpdate() ... to determine whether the component should re-render

- Cleanup: componentWillUnmount() ... such as removing event listeners or clearing timers. This is important for preventing memory leaks and ensuring that the application runs efficiently.

- Side effects: componentDidMount() and componentDidUpdate(), can be used to perform side effects, such as fetching data from a remote API or updating a third-party library. 
## React Hooks
React Hooks are a feature introduced in React 16.8 that allow developers to use state and other React features in functional components. Before the introduction of Hooks, state and other lifecycle methods were only available in class components. 

- useState: This hook allows functional components to have state. 

- useEffect: This hook allows functional components to have lifecycle methods. side-effects -> data fetch using api call.

- useContext: This hook allows functional components to access context data that has been defined higher up in the component tree. 

- useReducer: out of scope for today

- useCallback: This hook allows functional components to memoize functions, which can improve performance by preventing unnecessary re-renders. 

- useMemo: This hook allows functional components to memoize values, which can improve performance by preventing unnecessary re-computations.

### UseState & UseEffect hooks
Example UseState
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

Example UseEffect


```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  function handleClick() {
    setCount(count + 1);

  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```
Example useCallback 

```jsx
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

Assignment: 
- useEffect and useCallback function own implementation for consuming the get/post method
- read about virtual DOM definition and 
- async + await for axios api call.