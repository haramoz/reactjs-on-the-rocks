import React, { useState, useCallback } from 'react';
import axios from 'axios';

function PostDataCallback() {
  const [success, setSuccess] = useState(false);
  const [counter, setCounter] = useState(0)

  const postMethod = useCallback(() => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Post request",
      body:  "This is a message to post"}
    )  
    .then((response) => {
        console.log(response.data);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
      }); 
      setCounter(counter + 1)
    }, [counter]);

    return (
        <div>
          <h2>You Called the post Method {counter} times</h2>
          <h2>Post was successful ? : {success.toString()}</h2>
          <button onClick={postMethod}>Click me to post the Data</button>
        </div>
        );
  }


export default PostDataCallback;