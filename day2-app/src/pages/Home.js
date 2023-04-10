import React, { useState, useEffect } from "react";
import logo from './../pictures/next_reply.png';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <div className="counter">
        <h1>Welcome to the Home page</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
      </div>
  );
}
export default Home;
