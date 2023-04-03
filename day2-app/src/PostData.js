import axios from 'axios';
import React, { useState, useEffect } from 'react';

function PostData() {

  const [success, setSuccess] = useState(false);
    
    useEffect(() => {
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
    }, []);

    return (
        <div>
          <h2>Post was successful ? : {success.toString()}</h2> 
        </div>
        );
  }


export default PostData;