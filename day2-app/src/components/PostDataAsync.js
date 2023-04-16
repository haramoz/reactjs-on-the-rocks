import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostDataAsync() {
  const [data, setData] = useState(null)

  useEffect(() => {

     async function postData() { 
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Post request",
      body:  "This is a message to post"}
    );  
    setData(response.json);
    }

    //postData();
  }, [data]);

    if (!data) {
      return <div>Loading...</div>;
    }
  
    return <div>{data}</div>;
  }


export default PostDataAsync;