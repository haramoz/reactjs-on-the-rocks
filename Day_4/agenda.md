# Day 4
Today we do some form submission and validation. Followed by having a look at event handling examples.
## Form submission 

```jsx

import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;

```
## validation

Now we add validation to it.

validate -> errors
finally check the length of errors


```jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!');
  };

  const validate = () => {
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <button type="submit" disabled={!validate()}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
```

### Conditional rendering

        {errors.email && <div className="error">{errors.email}</div>}

## Event handling
- onClick

```jsx

import React from 'react';

function handleClick() {
  console.log('Button was clicked!');
}

function App() {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
```

- onChange 
- onSubmit

Assignment: Finish the async example.



